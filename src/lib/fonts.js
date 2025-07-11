import { Inter, Crimson_Pro, Caveat, Roboto } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro',
})

export const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900'],
})