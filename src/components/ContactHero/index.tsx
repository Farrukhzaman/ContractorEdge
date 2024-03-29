import React from 'react'
import Image from 'next/image'

import ContentComponent from '../../components/ContentComponent'
import Heading from '../../components/ui/headings'
import Footercontact from '../../layouts/footer/FooterNav/FooterContact'
import { Form } from '../Forms'
import { RichText } from '../ui/RichText'
interface ContentContactProps {
  title?: string
  spanText?: string
  SubText?: string
  content?: string
  phone?: React.ReactNode
  email?: React.ReactNode
  location?: React.ReactNode
  formHeading?: string
  formFields?: Array<any>
}
export default function ContactHero({
  title,
  spanText,
  SubText,
  content,
  phone,
  email,
  location,
  formHeading,
  formFields,
}: ContentContactProps) {
  return (
    <>
      <div className="bg-simpifying-image bg-no-repeat bg-right-bottom px-5 lg:bg-auto md:bg-[length:34.25%] bg-[length:300px] items-center">
        <div className="container lg:pt-72 lg:pb-48 md:py-32 py-20 md:h-full items-center">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 md:col-span-4 col-span-12 col-start-1 md:mb-0 mb-6">
              <div className=" grid grid-cols-7">
                <div className="md:text-left text-center col-span-7">
                  <Heading
                    level={1}
                    spanText={spanText && spanText}
                    className="font-900 uppercase mb-0"
                  >
                    {title}
                  </Heading>
                </div>
                <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                  <Heading level={1} className="font-900 uppercase mb-0">
                    {SubText && SubText}
                  </Heading>
                </div>
                <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                  {content && (
                    <RichText content={content} className={`font-400 pb-8 md:text-base text-1sm`} />
                  )}

                  <Footercontact phone={phone} email={email} location={location} />
                </div>
              </div>
            </div>
            <div className="lg:col-start-8 md:col-start-6 col-start-1 lg:col-span-5 md:col-span-7 col-span-12 md:text-right text-center relative bg-white py-10">
              <Form formHeading={formHeading} formFields={formFields} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
