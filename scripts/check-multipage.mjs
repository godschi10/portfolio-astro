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
  ['services/index.html', 'services', 'Services — Gwill Chijioke', 'Services'],
  ['work/index.html', 'work', 'Selected Work — Gwill Chijioke', 'Selected Work'],
  ['contact/index.html', 'contact', 'Contact — Gwill Chijioke', "Let's talk."],
  ['404.html', '404', '404 — Page not found — Gwill Chijioke', "404 — This page doesn't exist."],
  ['privacy/index.html', 'privacy', 'Privacy — Gwill Chijioke', 'Privacy'],
  ['terms/index.html', 'terms', 'Terms — Gwill Chijioke', 'Terms'],
];
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
check('exactly eight generated HTML pages', () => {
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
for (const [file, name, title, heading] of routes) {
  const html = pages.get(name);
  check(`${name}: Layout, shared header/footer byte equality`, () => {
    assert.match(read(`src/pages/${name}.astro`), /import Layout from ['"]\.\.\/layouts\/Layout\.astro['"]/);
    for (const tag of ['header', 'footer']) assert.equal(part(html, tag), part(home, tag));
    assert.match(part(html, 'header'), /class="wordmark"/);
    for (const route of ['about', 'work', 'services']) assert.ok(part(html, 'header').includes(`href="${base}${route}/"`));
    assert.match(html, /https:\/\/tech\.gwillchijioke\.com\/" target="_blank" rel="noopener noreferrer"/);
  });
  check(`${name}: exact title, one h1 and main landmark`, () => {
    assert.equal(text(part(html, 'title')), title);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal(text(part(html, 'h1')), heading);
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
check('honest draft content and service scope', () => {
  assert.match(part(pages.get('about'), 'main'), /This page is a draft/);
  for (const name of ['services', 'work', 'contact', 'privacy', 'terms']) assert.match(part(pages.get(name), 'main'), /This page is a draft/);
  const services = part(pages.get('services'), 'main');
  for (const name of ['Web Development', 'Web Design', 'SEO', 'Tech Consulting']) assert.ok(services.includes(name));
  assert.equal((services.match(/<details\b/g) || []).length, 4);
  assert.equal((services.match(/Get a Quote/g) || []).length, 4);
  assert.match(text(services), /Not sure what you need\?/);
  assert.match(text(services), /Let's Talk/);
});
check('three explicitly unnamed work placeholders; no fake case-study links', () => {
  const work = part(pages.get('work'), 'main');
  assert.equal((work.match(/class="project-card"/g) || []).length, 3);
  for (const n of [1, 2, 3]) assert.match(text(work), new RegExp(`Project ${n} — unnamed placeholder`));
  assert.doesNotMatch(work, /<img\b|href="[^"]*\/work\/[^"#]+/);
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
  assert.doesNotMatch(part(home, 'footer'), /not available|leg one/);
  assert.ok(part(home, 'header').includes(`href="${base}contact/"`));
  for (const name of ['overlay-nav', 'no-js-nav']) {
    const nav = home.match(new RegExp(`<nav class="${name}"[^>]*>[\\s\\S]*?</nav>`))?.[0];
    assert.ok(nav, `${name} exists`);
    for (const route of ['about', 'work', 'services', 'contact']) assert.ok(nav.includes(`href="${base}${route}/"`));
  }
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
