'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SlidingComponent from '../../components/DemoForm'
import DemoButton from '../../components/ui/DemoButton'

interface MenuItem {
  title: string
  link: string
  dropdown?: boolean
  smooth?: boolean
  subitems?: { title: string; link: string; smooth?: boolean }[]
}

interface NavigationProps {
  menuItems: MenuItem[]
  sidebarData: any
}

const Navigation: React.FC<NavigationProps> = ({ menuItems, sidebarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const onClose = () => {
    setIsOpen(false) // Close the sliding component
  }

  return (
    <nav>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <button className="text-white text-xl lg:hidden" onClick={toggleMenu}>
          Menu
        </button>

        {/* Desktop menu */}
        <ul
          className={`menu-main uppercase text-sm lg:flex items-center ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {menuItems &&
            menuItems?.map((item, index) => (
              <li key={index} className={`relative lg:mr-10 ${item.dropdown ? 'group' : ''}`}>
                {/* {JSON.stringify(router.query.slug)} */}
                <Link
                  href="[slug]"
                  as={`${item.link}`}
                  className={`${
                    router.query.slug === item.link ? 'active-item' : 'text-white'
                  } hover:text-strong-orange menu-parent-element pb-8`}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ul className="absolute left-0 my-7 py-2 hidden rounded-lg text-black bg-white min-w-[253px] group-hover:block">
                    {item.subitems?.map((subitem, subindex) => (
                      <li key={subindex}>
                        <Link
                          href={subitem.link}
                          className="px-4 py-2 capitalize m-0 hover:bg-strong-orange hover:text-white block"
                        >
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          <li>
            <DemoButton sidebarData={sidebarData} />
          </li>
          <li>
            <Link
              href="https://portal.mycontractorsedge.com/"
              className="px-6 py-4 rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block bg-transparent hover:bg-strong-orange hover:text-white undefined text-center"
            >
              login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
