'use client'
import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import Heading from '../ui/headings'

export interface ContactFormProps {
  spanText?: string
  formHeading?: string
  formFields?: Array<any>
  formAPIHook?: string
}
export interface FieldState {
  value?: string
  labelClass?: string
}
interface Window {
  dataLayer?: any[]
}

export const Form = ({ spanText, formFields = [], formHeading, formAPIHook }: ContactFormProps) => {
  const formRef = useRef(null)

  // const [isFocused, setIsFocused] = useState(null)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isInputValid, setIsInputValid] = useState(true)
  const [emailValue, setEmailValue] = useState('')
  const initialFieldStates: FieldState[] = formFields.map(() => ({
    value: '',
    labelClass: '',
  }))
  const [fieldStates, setFieldStates] = useState(initialFieldStates)
  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const [formMessageType, setFormMessageType] = useState('')

  const handleFocus = () => {
    setIsInputFocused(true)
  }

  const handleBlur = () => {
    setIsInputFocused(false)

    // Add your validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(emailValue)

    setIsInputValid(isValid)
  }

  const router = useRouter()
  const handleFieldChange = (e, index) => {
    setFieldStates(prevState => {
      const updatedFieldStates = [...prevState]
      updatedFieldStates[index] = {
        ...updatedFieldStates[index],
        value: e.target.value,
        labelClass: e.target.value ? 'filled' : '',
      }
      return updatedFieldStates
    })

    if (formFields[index].fieldType === 'email') {
      setEmailValue(e.target.value)

      // Add your email validation logic here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValid = emailRegex.test(e.target.value)
      setIsInputValid(isValid)
    }
  }
  const generateCleanName = originalName => {
    return originalName.replace(/[^a-zA-Z]/g, '')
  }

  const submit = useCallback(
    async e => {
      e.preventDefault()
      setIsLoading(true)

      const formData = new FormData(e.target)

      formData.append('page', router.asPath)
      formData.append('formAPIHook', formAPIHook || '')

      try {
        const response = await fetch('/api/formSubmit', {
          method: 'POST',
          body: formData,
        })

        const responseData = await response.json()

        setIsLoading(false)

        if (responseData.status === 'success') {
          // Show success message
          setFormMessage('Thank you! We will be in touch soon.')
          setFormMessageType('success')

          // reset form values
          e.target.reset()
          setEmailValue('')

          // clear message in 5 seconds
          setTimeout(() => {
            setFormMessage('')
          }, 5000)
        } else {
          // Show error message
          setFormMessage('There was an error. Please try again.')
          setFormMessageType('error')
        }
      } catch (error) {
        setIsLoading(false)
        // Show error message
        setFormMessage('There was an error. Please try again.')
        setFormMessageType('error')
      }
    },
    [formAPIHook, router],
  )

  // const submit = (e: any) => {}
  return (
    <div className="form">
      <div className="grid grid-cols-12 gap-30">
        <div className="col-start-2 col-end-12 ">
          <div className="grid grid-cols-12 gap-30">
            {formHeading && (
              <Heading level={4} className="text-black col-span-12 text-left font-900">
                {spanText && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gradient-secondary to-gradient-primary">
                    {spanText}
                  </span>
                )}{' '}
                {formHeading}
              </Heading>
            )}
            <div className="col-span-12 pt-4">
              {/* {JSON.stringify(formFields)} */}
              {formFields && (
                <form className="contact-form" onSubmit={submit} ref={formRef}>
                  <input type="hidden" name="formType" value={formHeading} />
                  {formFields?.map((fields: any, index: any) => (
                    <div className="input-wrap relative" key={fields.id}>
                      <label>
                        {/* {JSON.stringify(fields)} */}
                        {fields.fieldType === 'radio' ? (
                          <div>
                            <p className=" text-black text-1sm pb-4">{fields.label}</p>
                            <div className="flex sm:flex-row flex-col sm:gap-10 gap-3">
                              {fields.radioOptions?.map((radioOption, optionIndex) => (
                                <label key={optionIndex} className="text-label-color text-1sm">
                                  <input
                                    required
                                    type="radio"
                                    name={generateCleanName(fields.Name)} // Use the name from the form field
                                    value={radioOption.value} // Use the value from the radio option
                                  />
                                  {radioOption.label}
                                </label>
                              ))}
                            </div>
                          </div>
                        ) : fields.fieldType === 'select' ? (
                          <div>
                            {/* <p>{fields.label}</p> */}
                            <select
                              required
                              name={generateCleanName(fields.Name)}
                              className="py-4 mb-8 w-full bg-transparent border-b text-black leading-none uppercase outline-0 border-footer-border focus:border-strong-orange"
                            >
                              <option value="">{fields.label}</option>
                              {fields.selectOptions?.map((selectOption, optionIndex) => (
                                <option key={optionIndex} value={selectOption.value}>
                                  {selectOption.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : fields.fieldType === 'email' ? (
                          <input
                            required
                            type={fields.fieldType}
                            name={generateCleanName(fields.Name)}
                            // placeholder={fields.label}
                            className={`${isInputValid ? 'valid' : 'invalid'} ${
                              isInputFocused || !isInputValid ? 'validinput' : ''
                            } py-4 mb-8 w-full bg-transparent border-b text-black leading-none uppercase outline-0 border-footer-border focus:border-strong-orange`}
                            // className={` ${isInputFocused || !isInputValid ? styles.focused : ''}`}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={e => handleFieldChange(e, index)}
                            value={emailValue}
                          />
                        ) : (
                          <input
                            required
                            type={fields.fieldType}
                            name={generateCleanName(fields.Name)}
                            // placeholder={fields.label}
                            className={`${
                              isInputFocused || !isInputValid ? 'validinput' : ''
                            } py-4 mb-8 w-full bg-transparent border-b text-black leading-none uppercase outline-0 border-footer-border focus:border-strong-orange`}
                            // className={` ${isInputFocused || !isInputValid ? styles.focused : ''}`}
                            onFocus={handleFocus}
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                          />
                        )}
                        {fields.fieldType === 'select' || fields.fieldType === 'radio' ? (
                          ''
                        ) : (
                          <span
                            className={`text-label-color text-1sm uppercase absolute left-0 top-[14px] transition-all duration-300 ease-in-out pointer-events-none focus:text-strong-orange focus:text-[12px]`}
                          >
                            {fields.label}
                            {fields.required && ( // Check if the field is required
                              <span className="text-red-600 mr-1">*</span>
                            )}
                          </span>
                        )}
                      </label>
                    </div>
                  ))}

                  <div className="submit-btn">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-6 py-4 lg:mr-5 rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block bg-strong-orange text-white hover:bg-white hover:text-strong-orange md:mb-0 mb-6 text-center"
                    >
                      {isLoading ? 'SENDING...' : 'SUBMIT'}
                    </button>
                  </div>
                </form>
              )}
              {formMessage && (
                <div
                  className={`form-message ${formMessageType} w-full mt-3 px-6 py-4 lg:mr-5 rounded-4xl uppercase text-sm  leading-none focus:outline-none focus:ring block border border-[green] text-[green] md:mb-0 mb-6 text-center`}
                >
                  {formMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
