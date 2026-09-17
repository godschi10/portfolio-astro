"""Focused integration contract; source checks first, --built checks emitted assets.
Regressions caught: changed headline/palette, remote/missing fonts, fake routes,
removed staging metadata, review UI leakage, lost menu containment source hooks.
This is static evidence, not a browser accessibility or visual test.
"""
from pathlib import Path
import hashlib
import re
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
SOURCE = (ROOT / 'src/pages/index.astro').read_text()
BUILT = '--built' in sys.argv
sys.argv = [sys.argv[0]]

class IntegrationContract(unittest.TestCase):
    def test_fixed_light_and_refinement(self):
        self.assertNotIn('prefers-color-scheme', SOURCE)
        self.assertIn('color-scheme:light', SOURCE)
        self.assertIn('--canvas:#f7f6f3', SOURCE)
        self.assertIn('margin-left:32px', SOURCE)
        self.assertNotIn('feTurbulence', SOURCE)
        self.assertNotIn('.hero::before', SOURCE)

    def test_exact_headline_and_identity(self):
        heading = re.search(r'<h1\b[^>]*>(.*?)</h1>', SOURCE, re.S).group(1)
        text = re.sub(r'<[^>]+>', '', heading)
        self.assertEqual(' '.join(text.split()), 'I design. I build. I make it rank.')
        self.assertIn('font:700 clamp(20px,2.8vw,24px)/1 var(--mono)', SOURCE)
        self.assertIn('font-weight:800;font-size:clamp(36px,8vw,96px)', SOURCE)
        self.assertIn('background:linear-gradient(90deg,var(--purple),var(--green));opacity:.7', SOURCE)

    def test_local_fonts(self):
        self.assertIn('import.meta.env.BASE_URL', SOURCE)
        self.assertNotRegex(SOURCE, r'fonts\.(googleapis|gstatic)\.com|data:font')
        self.assertIn('font-display:swap', SOURCE)
        for weight in (400, 700, 800):
            name = f'jetbrains-mono-latin-{weight}-normal.woff2'
            self.assertEqual((ROOT/'public/fonts'/name).read_bytes(), (ROOT/'docs/mockups/header-hero/fonts'/name).read_bytes())
        self.assertEqual((ROOT/'public/fonts/OFL.txt').read_bytes(), (ROOT/'docs/mockups/header-hero/fonts/OFL.txt').read_bytes())

    def test_scope_and_existing_content(self):
        self.assertNotIn('review-note', SOURCE)
        self.assertNotIn('data-preview', SOURCE)
        self.assertNotRegex(SOURCE, r'href="#(?:about|services)"')
        self.assertIn('data-scope="About"', SOURCE)
        self.assertIn('data-scope="Services"', SOURCE)
        self.assertIn('id="work"', SOURCE)
        self.assertIn('href="#work"', SOURCE)
        self.assertIn('Selected work &mdash; next section to be designed.', SOURCE)
        self.assertIn('mailto:hi@gwillchijioke.com', SOURCE)

    def test_staging_and_menu_source_contract(self):
        self.assertRegex(SOURCE, r'name="robots" content="noindex, ?nofollow"')
        self.assertIn('GitHub Pages staging — not production', SOURCE)
        self.assertIn('z-index:100;background:#17141c', SOURCE)
        for token in ('aria-modal="true"', "x.inert=true", "x.inert=false", "e.key==='Escape'", "returnTo?.focus()", "e.key==='Tab'", "'focusin'"):
            self.assertIn(token, SOURCE)

    @unittest.skipUnless(BUILT, 'run --built after single build')
    def test_emitted_contract(self):
        html = (ROOT/'dist/index.html').read_text()
        css = html + '\n'.join(p.read_text() for p in (ROOT/'dist/_astro').glob('*.css'))
        self.assertRegex(html, r'name="robots" content="noindex, ?nofollow"')
        self.assertIn('GitHub Pages staging — not production', html)
        self.assertNotIn('prefers-color-scheme', css)
        self.assertNotRegex(css, r'fonts\.(googleapis|gstatic)\.com|data:font')
        paths = re.findall(r'url\([\"\']?(/portfolio-astro/fonts/[^)\"\']+\.woff2)', css)
        self.assertEqual(len(set(paths)), 3)
        for path in paths:
            asset = ROOT/'dist'/path.removeprefix('/portfolio-astro/')
            self.assertEqual(asset.read_bytes(), (ROOT/'public/fonts'/asset.name).read_bytes())
        self.assertTrue((ROOT/'dist/fonts/OFL.txt').is_file())
        heading = re.search(r'<h1\b[^>]*>(.*?)</h1>', html, re.S).group(1)
        self.assertEqual(' '.join(re.sub(r'<[^>]+>', '', heading).split()), 'I design. I build. I make it rank.')
        self.assertNotIn('review-note', html)
        self.assertNotRegex(html, r'<base\b')

if __name__ == '__main__':
    unittest.main(verbosity=2)
