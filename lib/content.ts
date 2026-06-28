/**
 * Single source of truth for every piece of editable copy on the page.
 * Components read from here so nothing user-facing is hardcoded in JSX.
 */

export const email = 'contact@nicolaedogotaru.com'

/** Anchor ids shared between the sections and the terminal navigation. */
export const sectionIds = {
  hero: 'top',
  work: 'work',
  dossier: 'about',
  contact: 'contact',
} as const

export interface Hero {
  eyebrow: string
  titleLines: [string, string]
  role: { lead: string; tail: string }
  statement: string
}

export const hero: Hero = {
  eyebrow: 'session restored // access granted',
  titleLines: ['nicolae', 'dogotaru'],
  role: { lead: 'ai engineer', tail: 'infrastructure' },
  statement: 'I build end-to-end LLM systems that run in production.',
}

export interface Project {
  index: string
  name: string
  description: string
  tags: string[]
  /** Reserved placeholder slot rendered in a muted "soon" style. */
  classified?: boolean
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'social-corpus-engine',
    description:
      'Pulls large social datasets through an LLM pipeline to extract structure, model behaviour, and profile a persona at scale.',
    tags: ['python', 'llm', 'data'],
  },
  {
    index: '02',
    name: 'infra-automation',
    description:
      'Agentless provisioning and k3s clusters with secrets, stateful services, and reproducible git-only deploys.',
    tags: ['k3s', 'terraform', 'infra'],
  },
  {
    index: '03',
    name: 'flagship.classified',
    description:
      'The one build that proves the whole thesis. Recovery in progress. This slot is reserved for it.',
    tags: ['soon'],
    classified: true,
  },
]

export interface DossierEntry {
  key: string
  value: string
  /** Renders the value in the accent (green) colour. */
  accent?: boolean
}

export interface Dossier {
  lead: string
  paragraph: string
  entries: DossierEntry[]
}

export const dossier: Dossier = {
  lead: 'I design the model logic, build the pipelines and APIs around it, and ship the infrastructure it runs on.',
  paragraph:
    "French engineer based near Paris, master's in systems and networks. Comfortable from the data layer up to production, biased toward systems that are durable rather than clever.",
  entries: [
    { key: 'focus', value: 'end-to-end LLM systems' },
    { key: 'layers', value: 'model · pipelines · app · infra' },
    { key: 'cloud', value: 'AWS · GCP · Azure · self-hosted' },
    { key: 'status', value: 'open // freelance and CDI', accent: true },
  ],
}

export interface Link {
  label: string
  /** LinkedIn is intentionally left empty until the profile is ready. */
  href: string
}

export interface Contact {
  label: string
  headingLines: string[]
  links: Link[]
  footer: [string, string]
}

export const contact: Contact = {
  label: 'open channel',
  headingLines: ["let's build", 'something', 'that runs.'],
  links: [
    { label: 'github', href: 'https://github.com/ndogota' },
    { label: 'linkedin', href: '' },
  ],
  footer: [
    'nicolae dogotaru // operator',
    '© 2026 // built from scratch in the dark',
  ],
}

export const stack = [
  'python',
  'pytorch',
  'llms',
  'rag',
  'fastapi',
  'node',
  'postgres',
  'kubernetes',
  'k3s',
  'terraform',
  'aws',
  'gcp',
  'azure',
  'grafana',
]

/** The boot log printed line by line up to "access granted". */
export const bootLines = [
  'dogotaru-systems // termlink v4.2',
  'establishing secure channel ........... [ OK ]',
  'loading  model_logic .................. [ OK ]',
  'loading  data_pipeline ................ [ OK ]',
  'loading  infra_layer .................. [ OK ]',
  'decrypting operator dossier ........... [ OK ]',
  '',
  'access granted',
]

/** Static text outputs for the command interpreter. */
export const terminal = {
  help: 'available: whoami, work, dossier, stack, contact, clear',
  whoami:
    'nicolae dogotaru // ai engineer. builds end-to-end llm systems and the infrastructure under them.',
  stack: stack.join(' · '),
  ls: 'work/  dossier/  channel/  flagship.classified',
  surface: 'the surface is still hostile. stay in the tunnels.',
  sudo: 'nice try, operator.',
  routeWork: 'routing to ./work ...',
  routeDossier: 'opening operator dossier ...',
} as const
