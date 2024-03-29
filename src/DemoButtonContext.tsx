'use client'

import React, { createContext, useContext, useState } from 'react'

interface DemoButtonContextType {
  toggleSlidingComponent: (spanText: string, formHeading: string, formFields: any[]) => void
  onClose: () => void
  isOpen: boolean
  spanText: string
  formHeading: string
  formFields: any[]
}

const DemoButtonContext = createContext<DemoButtonContextType>({
  toggleSlidingComponent: () => {},
  onClose: () => {},
  isOpen: false,
  spanText: '',
  formHeading: '',
  formFields: [],
})

export function useDemoButton() {
  return useContext(DemoButtonContext)
}

export function DemoButtonProvider({ children, sidebarData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formHeading, setFormHeading] = useState(sidebarData?.formHeading || '')
  const [spanText, setSpanText] = useState(sidebarData?.spanText || '')
  const [formFields, setFormFields] = useState(sidebarData?.formFields || [])

  const toggleSlidingComponent = (spanText, formHeading, formFields) => {
    setIsOpen(!isOpen)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <DemoButtonContext.Provider
      value={{ toggleSlidingComponent, onClose, isOpen, spanText, formHeading, formFields }}
    >
      {children}
    </DemoButtonContext.Provider>
  )
}
