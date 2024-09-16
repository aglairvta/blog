import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Vittorya Aglair',
  title: 'blog',
  description: 'apenas um blog.',
  lang: 'pt-BR',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
