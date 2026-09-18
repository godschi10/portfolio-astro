// Shared work data — single source for /work/ grid, homepage section and
// case-study prev/next nav. Fixed 3-project cycle: portfolio → androidscroll
// → finance → portfolio. Only researcher-verified facts (docs/CASE-STUDY-BRIEFS.md);
// every TBD metric is omitted, never a placeholder statistic.
export interface WorkResult { number: string; suffix: string; label: string; }
export interface WorkStudy {
  slug: string;
  name: string;
  desc: string;
  tags: string[];
  role?: string;
  year?: string;
  liveUrl?: string;
  status: 'live' | 'soon';
  problem: string[];
  solution: string[];
  results?: WorkResult[];
  resultNote?: string;
  stack?: string[];
}

export const studies: WorkStudy[] = [
  {
    slug: 'portfolio',
    name: 'This portfolio site',
    desc: 'Custom standalone WordPress theme and its static Astro port — the site sells the craft it is built with.',
    tags: ['WordPress', 'Custom Theme', 'Design System'],
    role: 'Design + Development',
    year: '2026',
    status: 'live',
    problem: [
      'A portfolio for a developer who sells speed, design systems, and search rankings has to prove all three at once. Anything slow, generic, or invisible to search engines would argue against the person it advertises.',
      'The WordPress theme also had to stand alone: no parent theme, no page builder, every template accounted for — front page, about, work archive, services, contact, case studies, legal pages — with accessibility, SEO, caching, and performance audits closed in the same cycle.',
    ],
    solution: [
      'Built a standalone WordPress theme, now at v1.9.17, with zero dependencies on parents or builders. It requires WordPress 6.1 and PHP 7.4, ships the full page inventory — including an asymmetric work grid and a case-study template with problem, solution, results, stack, and prev/next navigation — and runs on PHP 8.3 with OPcache and Redis behind Cloudflare.',
      'This Astro site is its static port: the same design tokens and mono-led voice, a shared layout with self-hosted JetBrains Mono, staging-wide noindex, and WebSite, Person, Organization, and BreadcrumbList structured data mirroring the theme\u2019s SEO layer.',
    ],
    results: [
      { number: '5', suffix: 'ms', label: 'Cache-hit TTFB, average' },
      { number: '6.9', suffix: '\u00d7', label: 'Brotli compression' },
      { number: '\u221271', suffix: '%', label: 'Image weight, WebP variants' },
      { number: '16', suffix: 'KB', label: 'Database autoload' },
    ],
    stack: ['WordPress', 'PHP', 'Astro', 'Cloudflare', 'Redis', 'OPcache'],
  },
  {
    slug: 'androidscroll',
    name: 'AndroidScroll',
    desc: 'The Android field manual — practical guides tested on mid-range phones, with honest counts and a public roadmap.',
    tags: ['WordPress', 'SEO', 'Performance', 'Cloudflare'],
    role: 'Design + Development + SEO',
    year: '2026',
    liveUrl: 'https://androidscroll.com',
    status: 'live',
    problem: [
      'Most Android help content is written from press releases, not from phones. Readers with a draining battery or a full storage bar need fixes that were actually tested — on the kind of mid-range device they own.',
      'AndroidScroll needed an information architecture that respects that reader: pillar shelves, an honest count of what exists and what is still empty, and search that works the way an app searches — plus a real byline, a correction contact, and a published test method.',
    ],
    solution: [
      'A WordPress publication served behind Cloudflare, with RankMath schema templates and ThirstyAffiliates in the stack. The homepage leads with a live ledger — 16 guides, 54 comments, 37.7k words, publishing since 2019 — then top fixes, the pillar map, the money tree, and the desk.',
      'The buying-guides shelf stays visibly empty rather than faking authority: the site states it will not recommend a phone until it has bought one and lived with it for two weeks. Search is app-like, with trending queries and keyboard navigation.',
    ],
    results: [
      { number: '16', suffix: '', label: 'Published guides' },
      { number: '54', suffix: '', label: 'Reader comments' },
      { number: '37.7', suffix: 'k', label: 'Words published' },
      { number: '2019', suffix: '', label: 'Publishing since (est.)' },
    ],
    stack: ['WordPress', 'Cloudflare', 'RankMath', 'ThirstyAffiliates'],
  },
  {
    slug: 'finance',
    name: 'Finance blog',
    desc: 'Personal finance in plain language — a reserved slot. The site is not live yet.',
    tags: ['Personal Finance'],
    status: 'soon',
    problem: [
      'The third slot is reserved for a personal-finance publication in plain language — Nigerian personal finance, savings, and investment, the beat defined on the about page. The beat exists; the site does not yet.',
    ],
    solution: [
      'There is nothing to describe yet. The build, the stack, and the launch date are all undecided, so this page holds the slot instead of inventing them. The full case study ships when the site goes live.',
    ],
    resultNote: 'Early days — no results to report yet.',
  },
];

// Cyclical neighbors: every page always has BOTH neighbors (1→2→3→1).
export function neighbors(slug: string): { prev: WorkStudy; next: WorkStudy } {
  const i = studies.findIndex(s => s.slug === slug);
  const n = studies.length;
  return { prev: studies[(i + n - 1) % n], next: studies[(i + 1) % n] };
}
