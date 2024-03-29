import { useState } from 'react'
import { Lato } from 'next/font/google'

import SlidingComponent from '../components/DemoForm'
import SlidingFormWrapper from '../components/SlidingFormWrapper'
import { DemoButtonProvider } from '../DemoButtonContext'
import Footer from '../layouts/footer'
import Header from '../layouts/Header'

// import '../app---/app.scss'
// import '../app---/global.css'

// import classes from './layout.module.scss'

const lato = Lato({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export default function Home({ children, sidebarData }) {
  return (
    <div className={lato.className}>
      <DemoButtonProvider sidebarData={sidebarData}>
        <Header />
        <SlidingFormWrapper />
        {children}
        <Footer />
      </DemoButtonProvider>
    </div>
  )
}
