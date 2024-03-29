'use client'
import { useEffect, useState } from 'react'
import cls from 'classnames'
import { useRouter } from 'next/router'

import Navigation from '../Nav'
import MobileMenus from '../Nav/MobileMenu'
import LogoImage from './Logo'

import logo from '/public/svg/contracters-edge-logo.svg'
import stickylogo from '/public/svg/sticky-logo.svg'

import classes from '../../app---/layout.module.scss'

const menuItems = [
  {
    title: 'solutions',
    link: 'solutions',
    dropdown: true,
    subitems: [
      // { title: 'Customized Reporting', link: 'solutions#customized_reporting' },
      { title: 'Mobile Time Tracking', link: 'solutions#mobile-time-tracking' },
      { title: 'Wage Determination Rates', link: 'solutions#wage-determination-rates' },
      { title: 'Fringe Benefit Statement', link: 'solutions#fringe-benefit-statement' },
      // { title: 'Certified Payroll', link: 'solutions#certified-payroll' },
      {
        title: 'Automatic Predetermined Increases',
        link: 'solutions#automatic-predetermined-increases',
      },
    ],
  },
  { title: 'About Us', link: 'about' },
  { title: 'Contact Us', link: 'contact' },
]

const Header = ({ sidebarData }: any) => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header>
      <div
        className={cls(
          classes.header,
          `${isScrolled ? 'bg-white m-5 rounded-lg header-sticky' : ''}`,
          'hidden lg:flex items-center py-6 xxl:px-15 px-5 fixed w-full z-[9999] transition-all',
        )}
      >
        {isScrolled ? <LogoImage logosrc={stickylogo} /> : <LogoImage logosrc={logo} />}
        <Navigation sidebarData={sidebarData} menuItems={menuItems} />
      </div>
      <div
        className={cls(
          `${isScrolled ? 'bg-black' : ''}`,
          'p-5 block lg:hidden fixed w-full z-[9999] transition-all',
        )}
      >
        <MobileMenus />
      </div>
    </header>
  )
}

export default Header
