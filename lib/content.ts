/**
 * Single source of truth for every piece of editable copy on the page.
 * Components read from here so nothing user-facing is hardcoded in JSX.
 */

export const email = 'nicolaedogotaru@gmail.com'

/** Anchor ids shared between the sections and the terminal navigation. */
export const sectionIds = {
  hero: 'top',
  experience: 'experience',
  work: 'work',
  dossier: 'dossier',
  contact: 'contact',
} as const

/* ---- top bar ---------------------------------------------------------- */

export const brand = 'DOGOTARU SYSTEMS'

export interface Tab {
  label: string
  href: string
}

export const tabs: Tab[] = [
  { label: 'experience', href: `#${sectionIds.experience}` },
  { label: 'work', href: `#${sectionIds.work}` },
  { label: 'dossier', href: `#${sectionIds.dossier}` },
  { label: 'channel', href: `#${sectionIds.contact}` },
]

/* ---- hero ------------------------------------------------------------- */

export interface Hero {
  eyebrow: string
  titleLines: [string, string]
  role: { lead: string; tail: string }
  statement: string
  hint: { lead: string; command: string; tail: string }
}

export const hero: Hero = {
  eyebrow: 'OPERATOR PROFILE // ACCESS GRANTED',
  titleLines: ['NICOLAE', 'DOGOTARU'],
  role: { lead: 'AI ENGINEER', tail: 'INFRASTRUCTURE' },
  statement: 'I build end-to-end LLM systems that run in production.',
  hint: {
    lead: 'type ',
    command: 'help',
    tail: ' to explore the system // or scroll to descend',
  },
}

/* ---- experience (service record) -------------------------------------- */

export interface Experience {
  role: string
  company: string
  type: string
  dates: string
  location: string
  bullets: string[]
}

export const experienceLabel = 'service record'

export const experience: Experience[] = [
  {
    role: 'Founding Engineer · AI & Infrastructure',
    company: 'STHO Global',
    type: 'CDI',
    dates: 'Sept 2025 to June 2026',
    location: 'Abu Dhabi, United Arab Emirates · Hybrid',
    bullets: [
      'Designed the LLM generation systems at the core of an AI-native platform for live entertainment, including automated venue programming (slots, calendars, budgets) that cut manual booking to a single validation step.',
      'Built lead generation for artists and venues, pairing external sourcing (scraping, public APIs, Google Places) with LLM enrichment to surface qualified prospects.',
      'Developed reputation analysis that aggregates external review signals into structured, comparable metrics.',
      'Engineered the full product around these systems (Next.js, Laravel) and ran the infrastructure (k3s, Terraform, Docker, GitHub Actions) in production.',
    ],
  },
  {
    role: 'Software Engineer · AI & Data-Driven Platforms',
    company: 'Pulse Partners',
    type: 'CDI',
    dates: 'Feb 2025 to Sept 2025',
    location: 'Martigny, Valais, Switzerland · Hybrid',
    bullets: [
      'Integrated LLM-based assistants into production platforms, backed by a multi-source data pipeline (public APIs, structured datasets) that grounded responses in reliable context.',
      'Built the backend services behind the AI: context retrieval, prompt orchestration, conversation memory, with token cost managed as a core constraint at scale.',
      'Embedded AI-generated insights into dashboards, removing recurring manual reporting for internal teams.',
    ],
  },
  {
    role: 'Full-stack Developer',
    company: 'EarnYourStream',
    type: 'Independent',
    dates: 'Oct 2023 to Feb 2025',
    location: 'Paris, France · Remote',
    bullets: [
      'Built plugins and servers on the TikTok API enabling real-time interaction between a live stream and a running game, where viewer actions triggered in-game events with no perceptible delay.',
      'Engineered the system for the highly variable load of live streaming, running on Kubernetes to maintain the real-time loop under sudden traffic spikes.',
    ],
  },
  {
    role: 'Information Security Officer Assistant',
    company: 'Conseil départemental de la Seine-Saint-Denis',
    type: 'Apprenticeship',
    dates: 'Oct 2021 to Oct 2023',
    location: 'Bobigny, France',
    bullets: [
      'Ran web-application security audits and built the Splunk dashboards used by the team to detect threats early across a large public-sector information system.',
      'Reduced incident response time from approximately 6h to 3.5h by tightening SIEM incident-management workflows.',
    ],
  },
  {
    role: 'Full-stack Developer',
    company: 'Mayara Clothing',
    type: 'Apprenticeship',
    dates: 'Oct 2020 to Oct 2021',
    location: 'Lyon, France',
    bullets: [
      'Rebuilt the checkout flow of a live e-commerce store (Shopify, Liquid), including custom payment modules and live stock and order management.',
      'Delivered changes directly against a production store handling real orders and customers.',
    ],
  },
  {
    role: 'Web Developer / Integrator',
    company: 'OwnLeadr',
    type: 'Apprenticeship',
    dates: 'Apr 2020 to Sept 2020',
    location: 'Lyon, France',
    bullets: [
      'Optimized front-end performance (Lighthouse scores above 90) in support of SEO and organic traffic.',
      'Built and integrated responsive client websites from design hand-off through to production.',
    ],
  },
]

/* ---- work (selected modules) ------------------------------------------ */

export interface Project {
  index: string
  name: string
  description: string
  tags: string[]
  repo?: string
  /** Reserved placeholder slot rendered in a muted "soon" style. */
  classified?: boolean
}

export const workLabel = 'selected work'

export const projects: Project[] = [
  {
    index: '01',
    name: 'little_ansible',
    description:
      'Ansible-style configuration management tool in Python, over SSH: copy, template, service, sysctl, and apt modules with a dry-run mode.',
    repo: 'https://github.com/ndogota/little_ansible',
    tags: ['Python', 'SSH', 'infra'],
  },
  {
    index: '02',
    name: 'kubernetes_cluster_k3s',
    description:
      'Lightweight k3s cluster on cloud VMs running WordPress/MariaDB and Hugo, with Traefik ingress and HashiCorp Vault secret injection.',
    repo: 'https://github.com/ndogota/kubernetes_cluster_k3s',
    tags: ['k3s', 'Vault', 'Traefik'],
  },
  {
    index: '03',
    name: 'chroot_manager',
    description:
      'Minimal container runtime in Python using chroot and bind mounts, driven by a YAML spec.',
    repo: 'https://github.com/ndogota/chroot_manager',
    tags: ['Python', 'containers', 'systems'],
  },
  {
    index: '04',
    name: 'abstract_vm',
    description:
      'Stack-machine bytecode interpreter in C: reads and executes an .avm program on a linked-list stack.',
    repo: 'https://github.com/ndogota/abstract_vm',
    tags: ['C', 'VM', 'systems'],
  },
  {
    index: '05',
    name: 'kubernetes_cluster_k8s',
    description:
      'Multi-node kubeadm Kubernetes cluster running a 3-tier app (React, Node API, MongoDB), with a private registry, ingress, and RBAC.',
    repo: 'https://github.com/ndogota/kubernetes_cluster_k8s',
    tags: ['kubeadm', 'k8s', 'RBAC'],
  },
  {
    index: '06',
    name: 'pong_js',
    description:
      'Pong in vanilla JavaScript on HTML canvas: fixed-timestep loop, single-player AI, and local two-player. Playable in the browser.',
    repo: 'https://github.com/ndogota/pong_js',
    tags: ['JavaScript', 'canvas', 'game'],
  },
  {
    index: '07',
    name: 'flagship // classified',
    description:
      'The one build that proves the whole thesis. Recovery in progress.',
    tags: ['soon'],
    classified: true,
  },
]

/* ---- dossier (about) -------------------------------------------------- */

export interface BuildPhase {
  verb: string
  line: string
}

export interface DossierEntry {
  key: string
  value: string
  /** Renders the value in the accent (green) colour. */
  accent?: boolean
}

export interface Dossier {
  label: string
  lead: string
  body: string
  origin: string
  phases: BuildPhase[]
  entries: DossierEntry[]
}

export const dossier: Dossier = {
  label: 'operator dossier',
  lead: 'I build AI products end to end: the LLM systems and data pipelines, the app they power, and the infrastructure that keeps it all running in production.',
  body: 'What I care about most is the unglamorous half of AI engineering. Making generation systems reliable instead of just demo-ready, grounding them in real data, and keeping the infra and token cost under control once real users show up.',
  origin:
    "French engineer based near Paris, master's in systems and networks. Biased toward systems that are durable rather than clever.",
  phases: [
    {
      verb: 'design',
      line: 'LLM-driven systems: generation, enrichment, retrieval, prompt orchestration.',
    },
    {
      verb: 'build',
      line: 'the backend and data flows behind them (Next.js, Laravel, Node, Python).',
    },
    {
      verb: 'run',
      line: 'the infrastructure myself (k3s, Terraform, Docker, GitHub Actions).',
    },
  ],
  entries: [
    { key: 'focus', value: 'end-to-end LLM systems' },
    { key: 'layers', value: 'model · pipelines · app · infra' },
    { key: 'cloud', value: 'k3s · Terraform · AWS · GCP · Azure' },
    { key: 'status', value: 'open // freelance and CDI', accent: true },
  ],
}

/* ---- contact ---------------------------------------------------------- */

export interface Link {
  label: string
  href: string
}

export interface Contact {
  label: string
  headingLines: string[]
  tagline: string
  links: Link[]
  footer: [string, string]
}

export const contact: Contact = {
  label: 'open channel',
  headingLines: ["LET'S BUILD", 'SOMETHING', 'THAT RUNS.'],
  tagline: "if the AI is the hard part, that's the kind of problem I like.",
  links: [
    { label: 'github', href: 'https://github.com/ndogota' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/nicolaedogotaru/' },
  ],
  footer: [
    'NICOLAE DOGOTARU // OPERATOR',
    '© 2026 // BUILT FROM SCRATCH IN THE DARK',
  ],
}

/* ---- status bar ------------------------------------------------------- */

export interface Channel {
  id: string
  label: string
}

export const statusBar = {
  signal: '▍▍▍▍▎',
  pwr: 'PWR 98%',
  uplink: 'UPLINK STABLE',
  meta: '2026 // FR · REMOTE',
  channels: [
    { id: sectionIds.hero, label: 'STATUS' },
    { id: sectionIds.experience, label: 'EXPERIENCE' },
    { id: sectionIds.work, label: 'WORK' },
    { id: sectionIds.dossier, label: 'DOSSIER' },
    { id: sectionIds.contact, label: 'CHANNEL' },
  ] satisfies Channel[],
}

/* ---- boot sequence ---------------------------------------------------- */

/** The boot log printed line by line up to "ACCESS GRANTED". */
export const bootLines = [
  'DOGOTARU SYSTEMS // TERMLINK PROTOCOL v4.2',
  'ESTABLISHING SECURE CHANNEL .............. [ OK ]',
  'MEMORY CHECK  65535 KB ................... [ OK ]',
  'LOADING MODULE  model_logic ............. [ OK ]',
  'LOADING MODULE  data_pipeline ........... [ OK ]',
  'LOADING MODULE  infra_layer ............. [ OK ]',
  'DECRYPTING OPERATOR DOSSIER ............. [ OK ]',
  '',
  'ACCESS GRANTED',
]

/* ---- command interpreter ---------------------------------------------- */

/** Static text outputs for the command line. */
export const terminal = {
  help: 'available: whoami, experience, work, stack, dossier, contact, clear',
  whoami:
    'nicolae dogotaru // ai engineer. builds ai products end to end, from the llm systems down to the infra that keeps them alive in prod.',
  stack:
    'typescript · javascript · python · php · next.js · react · node · nestjs · laravel · django · postgres · redis · k3s · docker · terraform · github actions · traefik · grafana · prometheus',
  ls: 'experience/  work/  dossier/  channel/',
  surface: 'the surface is still hostile. stay in the tunnels.',
  sudo: 'nice try, operator.',
  routeExperience: 'loading service record ...',
  routeWork: 'routing to /work ...',
  routeDossier: 'opening operator dossier ...',
} as const

/* ---- full stack ------------------------------------------------------- */

export interface StackGroup {
  group: string
  items: string[]
}

/** Full stack grouping, mirrored from the GitHub README. */
export const stackGroups: StackGroup[] = [
  { group: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'PHP'] },
  {
    group: 'front / back',
    items: [
      'Next.js',
      'React',
      'Node',
      'NestJS',
      'Laravel',
      'Django',
      'PostgreSQL',
      'Redis',
      'Supabase',
      'Prisma',
    ],
  },
  {
    group: 'infra & ops',
    items: [
      'Kubernetes / k3s',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'Traefik',
      'Cloudflare',
    ],
  },
  { group: 'monitoring', items: ['Grafana', 'Prometheus', 'Sentry', 'Splunk'] },
]
