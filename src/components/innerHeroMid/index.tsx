import React from 'react'

import { useDemoButton } from '../../DemoButtonContext'
import Button from '../ui/Buttons'
import DemoButton from '../ui/DemoButton'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

import heroimg from '/public/images/hero-img.jpg'
export interface InnerHeroProps {
  backgroundImage?: any
  title: string
  spanText?: string
  titleSub?: string
  description?: string
  buttonOneText?: string
  buttonOneLink?: string
  buttonTwoText?: string
  buttonTwoLink?: string
  sectionId?: string
  sidebarData?: any
}

export default function InnerHero({
  backgroundImage,
  title,
  spanText,
  titleSub,
  description,
  buttonOneText,
  buttonOneLink,
  buttonTwoText,
  buttonTwoLink,
  sectionId,
  sidebarData,
}: InnerHeroProps) {
  const sectionStyles: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  // sidebarData = {
  //   spanText: 'Your span text',
  //   formHeading: 'Your form heading',
  //   formFields: [
  //     /* Define your form fields here */
  //   ],
  // }
  return (
    <div
      className="relative bg-cover h-screen"
      id={`${sectionId && sectionId}`}
      style={sectionStyles}
    >
      <div className="backdrop-brightness-50 h-full flex items-center px-5">
        <div className="container">
          <div className="grid grid-cols-12">
            {title && (
              <Heading
                level={1}
                spanText={spanText}
                className="font-900 uppercase md:leading-none leading-normal xl:mb-8 md:mb-4  col-span-12"
              >
                {title}
              </Heading>
            )}
          </div>
          <div className="grid grid-cols-12">
            {titleSub && (
              <Heading
                level={1}
                className="uppercase text-left font-900 md:leading-none leading-normal col-span-12 md:col-start-2 mb-10"
              >
                {titleSub}
              </Heading>
            )}
          </div>
          <div className="grid grid-cols-12">
            {description && (
              <RichText
                content={description}
                className={`md:my-9 mb-8 mt-6 md:text-md text-1sm text-white md:col-span-6 col-span-12 md:col-start-2`}
              />
            )}
          </div>
          <div className="grid grid-cols-12">
            <div className="md:col-start-2 col-span-12 flex md:flex-row flex-col">
              {/* {buttonOneText && (
                <Button variant="primary" href={buttonOneLink} className="md:mb-0 mb-6 text-center">
                  {buttonOneText}
                </Button>
              )} */}
              <DemoButton sidebarData={sidebarData} />
              {buttonTwoText && (
                <Button
                  variant="secondary"
                  href={buttonTwoLink ? buttonTwoLink : '#'}
                  className="text-center"
                >
                  {buttonTwoText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
