import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = name => readFileSync(resolve(root, name), 'utf8');
const home = read('dist/index.html');
const about = read('dist/about/index.html');
const part = (html, tag) => {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`));
  assert.ok(match, `${tag} exists`);
  return match[0];
};
const text = html => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
let checks = 0;
function check(name, fn) { fn(); checks++; console.log(`PASS ${name}`); }
check('shared header and footer', () => {
  for (const tag of ['header', 'footer']) assert.equal(part(home, tag), part(about, tag));
});
check('distinct route content and titles', () => {
  assert.match(part(home, 'title'), /Gwill Chijioke — Web Design/);
  assert.match(part(about, 'title'), /About — Gwill Chijioke/);
  assert.match(text(part(home, 'h1')), /I design\. I build\. I make it rank\./);
  assert.match(text(part(about, 'h1')), /I'm Gwill — a web developer/);
  assert.doesNotMatch(part(about, 'main'), /id="hero-title"/);
  assert.match(part(about, 'main'), /This page is a draft/);
});
for (const [name, html] of [['home', home], ['about', about]]) {
  check(`${name}: shared navigation, indexing and assets`, () => {
    assert.match(html, /name="robots" content="noindex,nofollow"/);
    assert.match(html, /name="color-scheme" content="light"/);
    assert.match(part(html, 'header'), /href="\/portfolio-astro\/about\/"/);
    assert.match(html, /class="wordmark"/);
    assert.doesNotMatch(html, /100(?:&nbsp;|\s)*PSI/i);
    const assets = new Set(html.match(/\/portfolio-astro\/(?:fonts|_astro)\/[^"\s)<>]+\.(?:woff2|css|js)/g));
    assert.ok(assets.size >= 4, 'fonts and stylesheet references exist');
    for (const asset of assets) {
      const path = resolve(root, 'dist', asset.replace('/portfolio-astro/', ''));
      assert.ok(existsSync(path), `asset exists: ${asset}`);
    }
    for (const weight of [400, 700, 800]) assert.match(html, new RegExp(`jetbrains-mono-latin-${weight}-normal\\.woff2`));
  });
}
console.log(`${checks}/${checks} static multipage checks passed. Not a browser or visual test.`);
