export interface Project {
  name: string
  featured: boolean
  description: string
  tech: string[]
  colour?: string
  image?: string
  code?: string
  demo?: string
  upcoming?: boolean
}

export interface NavLink {
  name: string
  link?: string
}

export interface ContactLink {
  name: string
  link: string
  icon?: string
  image?: string
}
