'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { useDemoButton } from '../../DemoButtonContext'
import SlidingComponent from '../DemoForm'

const SlidingFormWrapper = sidebarData => {
  const { toggleSlidingComponent, isOpen, onClose, spanText, formHeading, formFields } =
    useDemoButton()

  return (
    <>
      {/* {JSON.stringify(sidebarData?.sidebarData?.formHeading)} */}
      <SlidingComponent
        isOpen={isOpen}
        onClose={onClose}
        spanText={spanText}
        formHeading={formHeading}
        formFields={formFields}
      />
    </>
  )
}

export default SlidingFormWrapper
