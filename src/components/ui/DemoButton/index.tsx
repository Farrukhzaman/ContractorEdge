'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { useDemoButton } from '../../../DemoButtonContext'
import SlidingComponent from '../../DemoForm'

const DemoButton = sidebarData => {
  const { toggleSlidingComponent, isOpen, onClose, spanText, formHeading, formFields } =
    useDemoButton()

  return (
    <>
      <button
        onClick={() => toggleSlidingComponent(spanText, formHeading, formFields)}
        className="px-6 py-4 lg:mr-5 rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block bg-strong-orange text-white hover:bg-white hover:text-strong-orange md:mb-0 mb-6 md:mx-0 mx-auto text-center md:w-auto w-full"
      >
        Book A demo
      </button>
    </>
  )
}

export default DemoButton
