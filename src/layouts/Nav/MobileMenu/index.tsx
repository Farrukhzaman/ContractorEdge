'use client'
import React, { useState } from 'react'

import LogoImage from '../../Header/Logo'
import MobileMenu from './MobileMenu'

import logo from '/public/svg/mobile-CE-logo.svg'

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

export default function MobileMenus() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="flex justify-between relative z-[9999]">
        <LogoImage logosrc={logo} />
        <button onClick={toggleMenu} className="text-white text-xl">
          <div className="w-9 h-4.5 flex flex-col justify-between">
            <div
              className={`w-9 h-0.5 bg-white transform transition-transform ${
                isMenuOpen ? '-rotate-45 translate-y-1.5 mt-0.5' : ''
              }`}
            ></div>
            <div
              className={`w-4.5 ml-auto h-0.5 bg-white transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-9 h-0.5 bg-white transform transition-transform ${
                isMenuOpen ? 'rotate-45 -translate-y-1.5  mb-0.5' : ''
              }`}
            ></div>
          </div>
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} menuItems={menuItems} />
    </>
  )
}
