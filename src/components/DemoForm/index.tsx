import React from 'react'

import { Form } from '../Forms'

interface DemeContactProps {
  isOpen: boolean
  onClose: () => void
  spanText?: string
  formHeading?: string
  formFields?: Array<any>
}

const SlidingComponent = ({
  isOpen,
  onClose,
  spanText,
  formHeading,
  formFields,
}: DemeContactProps) => {
  const handleClickOutside = e => {
    if (e.target.classList.contains('fixed')) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={handleClickOutside}></div>
      )}
      <div
        className={`sliding-component fixed inset-y-0 right-0 overflow-y-auto sm:w-[520px] w-[75%] py-10 bg-white transform sideslider overflow-x-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-[99999]`}
      >
        <div>
          <button
            onClick={onClose}
            className="close-cross absolute right-[40px] top-[40px] text-black text-xl"
          >
            x
          </button>
        </div>

        <Form spanText={spanText} formHeading={formHeading} formFields={formFields} />
      </div>
    </>
  )
}

export default SlidingComponent
