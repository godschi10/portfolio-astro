import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const base = '/portfolio-astro/';
const read = name => readFileSync(resolve(root, name), 'utf8');
const routes = [
  ['index.html', 'index', 'Gwill Chijioke — Web Design, Development & SEO', 'I design. I build. I make it rank.'],
  ['about/index.html', 'about', 'About — Gwill Chijioke', "I'm Gwill — a web developer who obsesses over performance, design and search rankings."],
  ['services/index.html', 'services', 'Services — Gwill Chijioke', 'What I build. What it costs.'],
  ['work/index.html', 'work', 'Selected Work — Gwill Chijioke', 'Projects I\u2019ve built and results I\u2019ve earned.'],
  ['work/portfolio/index.html', 'work/portfolio', 'Portfolio Case Study — Gwill Chijioke', 'This portfolio site', 'src/pages/work/portfolio.astro'],
  ['work/androidscroll/index.html', 'work/androidscroll', 'AndroidScroll Case Study — Gwill Chijioke', 'AndroidScroll', 'src/pages/work/androidscroll.astro'],
  ['work/finance/index.html', 'work/finance', 'Finance Case Study — Gwill Chijioke', 'Finance blog', 'src/pages/work/finance.astro'],
  ['contact/index.html', 'contact', 'Contact — Gwill Chijioke', "Let's talk."],
  ['404.html', '404', '404 — Page not found — Gwill Chijioke', "404 — This page doesn't exist."],
  ['privacy/index.html', 'privacy', 'Privacy — Gwill Chijioke', 'Privacy Policy'],
  ['terms/index.html', 'terms', 'Terms — Gwill Chijioke', 'Terms & Conditions'],
];
const srcOf = ([file, name, , , src]) => src ?? `src/pages/${name}.astro`;
const part = (html, tag) => {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`));
  assert.ok(match, `${tag} exists`);
  return match[0];
};
const text = html => html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/\s+/g, ' ').trim();
let checks = 0;
function check(name, fn) { fn(); checks++; console.log(`PASS ${name}`); }
const files = dir => readdirSync(dir).flatMap(name => {
  const path = resolve(dir, name);
  return statSync(path).isDirectory() ? files(path) : [path];
});
check('exactly eleven generated HTML pages', () => {
  assert.deepEqual(files(dist).filter(p => p.endsWith('.html')).map(p => relative(dist, p)).sort(), routes.map(r => r[0]).sort());
});
const pages = new Map(routes.map(([file, name]) => [name, read(`dist/${file}`)]));
const home = pages.get('index');

// Follow local resources, including references inside emitted stylesheets.
function assetPath(url, parent) {
  const clean = url.replace(/&amp;/g, '&').split(/[?#]/)[0];
  if (!clean || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(clean)) return null;
  if (/^(?:#|%23)/.test(clean)) return null; // SVG data-URI fragment (e.g. theme --noise url(%23noise))
  if (clean.startsWith('/')) {
    assert.ok(clean.startsWith(base), `asset respects staging base: ${url}`);
    return resolve(dist, decodeURIComponent(clean.slice(base.length)));
  }
  return resolve(dirname(parent), decodeURIComponent(clean));
}
function verifyAsset(url, parent, seen) {
  const path = assetPath(url, parent);
  if (!path) return;
  assert.ok(path.startsWith(`${dist}/`), `resource stays inside dist: ${url}`);
  assert.ok(existsSync(path) && statSync(path).isFile(), `asset exists: ${url}`);
  if (seen.has(path)) return;
  seen.add(path);
  if (path.endsWith('.css')) verifyCSS(readFileSync(path, 'utf8'), path, seen);
}
function verifyCSS(css, parent, seen) {
  for (const m of css.matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) verifyAsset(m[1], parent, seen);
  for (const m of css.matchAll(/@import\s+["']([^"']+)["']/g)) verifyAsset(m[1], parent, seen);
}
for (const route of routes) {
  const [file, name, title, heading] = route;
  const html = pages.get(name);
  check(`${name}: Layout, shared header/footer byte equality`, () => {
    assert.match(read(srcOf(route)), /import Layout from ['"](?:\.\.\/)+layouts\/Layout\.astro['"]/);
    for (const tag of ['header', 'footer']) assert.equal(part(html, tag), part(home, tag));
    assert.match(part(html, 'header'), /class="wordmark"/);
    for (const route of ['about', 'work', 'services']) assert.ok(part(html, 'header').includes(`href="${base}${route}/"`));
    assert.match(html, /https:\/\/androidscroll\.com\/" target="_blank" rel="noopener noreferrer"/);
  });
  check(`${name}: exact title, one h1 and main landmark`, () => {
    assert.equal(text(part(html, 'title')), title);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal(text(part(html, 'h1')), heading);
    if (name === 'privacy') {
      for (const s of ['Analytics \u2014 Matomo', 'Matomo runs without cookies on this site.', 'automatically purged after 12 months', 'Changes to this policy', 'mailto:hi@gwillchijioke.com']) assert.ok(html.includes(s), `privacy theme copy: ${s}`);
      for (const id of ['analytics', 'retention', 'contact-form', 'hosting', 'cookies', 'rights', 'changes', 'contact']) assert.ok(html.includes(`id="${id}"`), `privacy section #${id}`);
    }
    if (name === 'terms') {
      for (const s of ['By using gwillchijioke.com you agree', 'A contract exists only when a written proposal has been accepted', 'governed by the laws of the Federal Republic of Nigeria', 'These terms may be updated at any time', 'mailto:hi@gwillchijioke.com']) assert.ok(html.includes(s), `terms theme copy: ${s}`);
      for (const id of ['site-content', 'services', 'payment', 'revisions', 'ip', 'liability', 'law', 'changes', 'contact']) assert.ok(html.includes(`id="${id}"`), `terms section #${id}`);
    }
    assert.equal((html.match(/<main\b/g) || []).length, 1);
    assert.match(html, /<main id="main" tabindex="-1"/);
    if (name !== 'index') assert.doesNotMatch(part(html, 'main'), /id="hero-title"/);
    assert.doesNotMatch(html, /100(?:&nbsp;|\s)*PSI/i);
  });
  check(`${name}: noindex, fixed light and referenced assets`, () => {
    assert.match(html, /name="robots" content="noindex,nofollow"/);
    assert.match(html, /name="color-scheme" content="light"/);
    const seen = new Set();
    const parent = resolve(dist, file);
    for (const m of html.matchAll(/<(?:script|img|source|video|audio|iframe|input)\b[^>]*\bsrc="([^"]+)"/g)) verifyAsset(m[1], parent, seen);
    for (const m of html.matchAll(/<link\b[^>]*\bhref="([^"]+)"/g)) verifyAsset(m[1], parent, seen);
    for (const m of html.matchAll(/\bposter="([^"]+)"/g)) verifyAsset(m[1], parent, seen);
    for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) for (const item of m[1].split(',')) verifyAsset(item.trim().split(/\s+/)[0], parent, seen);
    verifyCSS(html, parent, seen);
    assert.ok(seen.size >= 4, 'fonts and stylesheet references exist');
    for (const weight of [400, 700, 800]) assert.match(html, new RegExp(`jetbrains-mono-latin-${weight}-normal\\.woff2`));
    const css = [...seen].filter(p => p.endsWith('.css')).map(p => readFileSync(p, 'utf8')).join('\n') + html;
    assert.match(css, /color-scheme:\s*light/);
    assert.doesNotMatch(css, /prefers-color-scheme|color-scheme:\s*(?:dark|light dark)/);
  });
}
check('no draft warning boxes site-wide; service scope intact', () => {
  for (const name of ['index', 'about', 'services', 'work', 'work/portfolio', 'work/androidscroll', 'work/finance', 'contact', 'privacy', 'terms', '404']) assert.doesNotMatch(pages.get(name), /draft/i);
  for (const name of ['about', 'services', 'work', 'contact', 'privacy', 'terms']) assert.doesNotMatch(part(pages.get(name), 'main'), /draft-notice|honest-notice/);
  const services = part(pages.get('services'), 'main');
  for (const name of ['Web Development', 'Web Design', 'SEO', 'Tech Consulting']) assert.ok(services.includes(name));
  assert.equal((services.match(/<details\b/g) || []).length, 4);
  assert.equal((services.match(/Get a Quote/g) || []).length, 4);
  assert.match(text(services), /Not sure which package fits\?/);
  assert.match(text(services), /Start a project/);
});
check('three real work cards link to case studies; no placeholders anywhere', () => {
  for (const [page, scope] of [['work', part(pages.get('work'), 'main')], ['index', part(pages.get('index'), 'main')]]) {
    assert.equal((scope.match(/class="work-card"/g) || []).length, 3, `${page}: three cards`);
    assert.doesNotMatch(text(scope), /unnamed placeholder/);
    for (const slug of ['portfolio', 'androidscroll', 'finance']) {
      assert.ok(scope.includes(`href="${base}work/${slug}/"`), `${page}: links to ${slug}`);
    }
    assert.equal((scope.match(/Read the case study/g) || []).length, 3, `${page}: three case-study CTAs`);
  }
  const work = part(pages.get('work'), 'main');
  for (const name of ['This portfolio site', 'AndroidScroll', 'Finance blog']) assert.ok(text(work).includes(name), `work card: ${name}`);
  assert.match(text(work), /Coming soon/);
});
check('case-study nav cycles 1-2-3-1 with All Projects center', () => {
  const cycle = { 'work/portfolio': ['work/finance', 'work/androidscroll'], 'work/androidscroll': ['work/portfolio', 'work/finance'], 'work/finance': ['work/androidscroll', 'work/portfolio'] };
  for (const [name, [prev, next]] of Object.entries(cycle)) {
    const main = part(pages.get(name), 'main');
    const nav = main.match(/<nav class="case-nav"[^>]*>[\s\S]*?<\/nav>/)?.[0];
    assert.ok(nav, `${name}: case-nav exists`);
    assert.match(nav, /aria-label="Project navigation"/);
    assert.match(nav, /Continue exploring/);
    assert.ok(nav.includes(`href="${base}${prev}/"`), `${name}: prev ${prev}`);
    assert.ok(nav.includes(`href="${base}${next}/"`), `${name}: next ${next}`);
    assert.ok(nav.includes(`href="${base}work/"`), `${name}: All Projects`);
    assert.match(nav, /Previous project/);
    assert.match(nav, /Next project/);
    assert.match(nav, /All Projects/);
    for (const section of ['problem-heading', 'solution-heading', 'result-heading']) assert.ok(main.includes(`id="${section}"`), `${name}: #${section}`);
    assert.ok(main.includes(`href="${base}contact/"`), `${name}: CTA to contact`);
  }
  const finance = part(pages.get('work/finance'), 'main');
  assert.match(text(finance), /Early days/);
  assert.doesNotMatch(finance, /Built with/);
});
check('contact preview cannot submit; real email fallback', () => {
  const contact = part(pages.get('contact'), 'main');
  assert.match(contact, /<fieldset disabled/);
  assert.doesNotMatch(contact, /<form\b/);
  assert.match(contact, /href="mailto:hi@gwillchijioke.com"/);
  assert.match(text(contact), /Availability has not been confirmed/);
  for (const field of ['name', 'email', 'project-type', 'budget', 'message']) assert.ok(contact.includes(`id="contact-${field}"`));
  assert.match(contact, /<button[^>]*type="button"[^>]*disabled/);
});
check('404 motif and real recovery routes', () => {
  const error = part(pages.get('404'), 'main');
  assert.match(error, /&lt;!-- page not found --&gt;/);
  for (const route of ['work', 'services', 'about', 'contact']) assert.ok(error.includes(`href="${base}${route}/"`));
  assert.ok(error.includes(`href="${base}"`));
  assert.match(text(error), /Go Back/);
  assert.match(text(error), /Go Home/);
});
check('shared navigation reaches all draft routes without scope interception', () => {
  assert.doesNotMatch(home, /data-scope="/);
  assert.doesNotMatch(home, /tech\.gwillchijioke\.com/);
  assert.doesNotMatch(home, /Tech Blog/);
  assert.doesNotMatch(part(home, 'footer'), /not available|leg one/);
  assert.ok(part(home, 'header').includes(`href="${base}contact/"`));
  assert.ok(home.includes('>04</span>Finance Blog'), 'drawer 04 is Finance Blog');
  assert.ok(home.includes('>05</span>Android Blog'), 'drawer 05 is Android Blog');
  assert.ok(home.includes('https://finance.gwillchijioke.com'), 'finance blog linked');
  assert.ok(home.includes('id="finance-heading"'), 'finance preview section present');
  assert.ok(home.includes('id="blog-heading"'), 'android preview section present');
  assert.equal((home.match(/class="post-card"/g) || []).length, 4, 'three live android cards + one finance hold card');
  assert.ok(home.includes('https://androidscroll.com/'), 'android cards link out');
  for (const name of ['mobile-nav', 'no-js-nav']) {
    const nav = home.match(new RegExp(`<nav class="${name}"[^>]*>[\\s\\S]*?</nav>`))?.[0];
    assert.ok(nav, `${name} exists`);
    for (const route of ['about', 'work', 'services', 'contact']) assert.ok(nav.includes(`href="${base}${route}/"`));
  }
});
check('homepage android island: live fetch + fallback + 1hr cache, one-line feed URL', () => {
  const src = read('src/pages/index.astro');
  assert.ok(src.includes('id="android-grid"'), 'android grid has island mount id');
  assert.equal((src.match(/ANDROID_FEED_URL/g) || []).length >= 2, true, 'single feed-URL constant defined and used');
  assert.match(src, /REPOINT HERE IN ONE LINE/, 'feed URL marked as one-line repoint');
  assert.match(src, /androidscroll\.com\/wp-json\/wp\/v2\/posts\?per_page=3/, 'island fetches latest 3 posts');
  assert.match(src, /3600000/, '~1hr localStorage TTL');
  assert.match(src, /localStorage\.getItem/, 'cache read present');
  assert.match(src, /localStorage\.setItem/, 'cache write present');
  assert.match(src, /built-in cards stay silently/, 'fetch failure keeps fallback silently');
  assert.match(src, /textContent/, 'island renders via textContent (no innerHTML injection)');
  assert.ok(home.includes('id="android-grid"'), 'built homepage carries the island mount');
  assert.ok(home.includes('ANDROID_FEED_URL'), 'built homepage ships the island script');
  assert.equal((home.match(/class="post-card"/g) || []).length, 4, 'build-time fallback cards intact (3 android + 1 finance)');
});
check('pagespeed: no unused parse-time preconnect, lazy island dns-prefetch', () => {
  for (const [file, name] of routes) {
    assert.ok(!pages.get(name).includes('<link rel="preconnect"'), `${name}: no parse-time preconnect`);
    assert.ok(!pages.get(name).includes('<link rel="dns-prefetch"'), `${name}: no parse-time dns-prefetch`);
  }
  const src = read('src/pages/index.astro');
  assert.ok(!src.includes('preconnect='), 'no preconnect prop passed to Layout');
  assert.match(src, /data-android-dns/, 'island injects lazy dns-prefetch when the fetch starts');
  assert.match(src, /querySelector\('link\[data-android-dns\]'\)/, 'lazy dns-prefetch injected once');
  assert.ok(home.includes('data-android-dns'), 'built homepage ships the lazy dns-prefetch injector');
});
check('pagespeed: footer shimmer runs on transform (composited)', () => {
  const layout = read('src/layouts/Layout.astro');
  assert.ok(!layout.includes('@keyframes shimmer{'), 'old background-position shimmer keyframes gone');
  assert.ok(!layout.includes('animation:shimmer '), 'nothing still references the old shimmer animation');
  assert.match(layout, /shimmer-sweep/, 'transform-based shimmer sweep present');
  assert.match(layout, /will-change:transform/, 'sweep hints the compositor');
  assert.match(layout, /@keyframes shimmer-sweep\{0%\{transform:translateX/, 'sweep animates transform only');
  assert.ok(home.includes('shimmer-sweep'), 'built homepage ships the composited sweep');
});
check('local link targets and fragments exist', () => {
  for (const [file, name] of routes) {
    for (const m of pages.get(name).matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const href = m[1];
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue;
      const target = new URL(href, `https://staging.invalid${base}${file}`);
      assert.ok(target.pathname.startsWith(base), `${name}: staging base ${href}`);
      let path = resolve(dist, decodeURIComponent(target.pathname.slice(base.length)));
      if (existsSync(path) && statSync(path).isDirectory()) path = resolve(path, 'index.html');
      assert.ok(existsSync(path), `${name}: route exists ${href}`);
      if (target.hash) assert.ok(readFileSync(path, 'utf8').includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${name}: fragment exists ${href}`);
    }
  }
});
console.log(`${checks}/${checks} static multipage checks passed across ${routes.length} pages. Not a browser or visual test.`);
