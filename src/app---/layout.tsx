import { GetServerSideProps } from 'next'
import { Lato } from 'next/font/google'
import payload from 'payload'

import Footer from '../layouts/footer'
import Header from '../layouts/Header'
import { getPageData } from '../services/page'
import { SLUGS } from '../slug'

import './app.scss'
import './globals.css'

import classes from './layout.module.scss'

const lato = Lato({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata = {
  title: 'Contractors Edge',
  description: 'Experience the future of Prevailing Wage compliance',
  url: '',
  icons: {
    icon: '/favicon.png',
  },
}

export default function Home({ children }) {
  const locale = 'en' // Default to 'en' if locale is not available
  // props.page.seo.type = 'webpage'
  return (
    <html lang="en" className={lato.className}>
      <body className={classes.body}>
        <header>
          <Header />
        </header>

        {children}

        <Footer />
      </body>
    </html>
  )
}
