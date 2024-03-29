'use client'
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'

import DemoButton from '../../../components/ui/DemoButton'

interface MobileMenuProps {
  title: string
  link: string
  dropdown?: boolean
  subitems?: { title: string; link: string }[]
}
interface NavigationProps {
  menuItems: MobileMenuProps[]
  isOpen: boolean
  onClose: () => void
  sidebarData?: any
}

const MobileMenu: React.FC<NavigationProps> = ({ isOpen, onClose, menuItems, sidebarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Reset the dropdown state when the menu is closed
    if (!isOpen) {
      setIsMenuOpen(false)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    // Close the menu when any menu item is clicked
    onClose()
  }

  const handleDropdownToggle = () => {
    // Toggle the dropdown state
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ul
        className={`uppercase md:text-3xl text-base lg:hidden items-center px-10 h-full text-left justify-center flex flex-col`}
      >
        {menuItems &&
          menuItems?.map((item, index) => (
            <li key={index} className={`relative lg:mr-10 w-full ${item.dropdown ? 'group' : ''}`}>
              {item.dropdown ? (
                <div className=" relative">
                  <Link
                    href={item.link}
                    onClick={handleMenuItemClick}
                    className="text-white hover:text-strong-orange menu-parent-element md:pb-12 pb-6 block cursor-pointer"
                  >
                    {item.title}
                  </Link>
                  <span
                    onClick={handleDropdownToggle}
                    className=" absolute right-0 top-[-2px] w-[40px] text-right"
                  >
                    <FaAngleDown className="inline-block ml-2" />
                  </span>
                </div>
              ) : (
                <Link
                  href={item.link}
                  onClick={handleMenuItemClick}
                  className="text-white hover:text-strong-orange menu-parent-element md:pb-12 pb-6 block"
                >
                  {item.title}
                </Link>
              )}

              {item.dropdown && isMenuOpen && (
                <ul className="relative left-0 mb-7 mt-[-20px] py-2 rounded-lg text-black bg-white min-w-[253px]">
                  {item.subitems?.map((subitem, subindex) => (
                    <li key={subindex}>
                      <Link
                        href={subitem.link}
                        onClick={handleMenuItemClick}
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
        <div className="w-full">
          <li className="w-full">
            {/* <button className="px-6 py-4 lg:w-auto w-full mb-5 rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block bg-strong-orange text-white hover:bg-white hover:text-strong-orange text-center">
              Book A demo
            </button> */}
            <DemoButton sidebarData={sidebarData} />
          </li>
          <li className="w-full">
            <Link
              href="https://portal.mycontractorsedge.com/"
              className="px-6 py-4 lg:w-auto w-full rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block bg-transparent hover:bg-strong-orange hover:text-white undefined text-center"
            >
              login
            </Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default MobileMenu
