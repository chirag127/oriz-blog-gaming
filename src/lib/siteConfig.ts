export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'arcade',
  name: 'Arcade',
  origin: 'https://gaming-blog.oriz.in',
  tagline: 'Bench-tested writing on games, gear, and getting good',
  description: 'Bench-tested writing on games, gear, and getting good — for players who read the spec sheet before the marketing.',
}
