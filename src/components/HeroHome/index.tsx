import React from 'react'

import { useDemoButton } from '../../DemoButtonContext'
import Button from '../ui/Buttons'
import DemoButton from '../ui/DemoButton'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

import heroimg from '/public/images/hero-img.jpg'
interface HeroData {
  heroTitle?: string
  spanText?: string
  titleSub?: string
  Description?: string
  sidebarData?: any
  // image?: string
  // id?: string
  // blockType?: string
}

// interface HeroHomeProps {
//   heroData: HeroData
// }

export default function HeroHome({
  heroTitle,
  spanText,
  titleSub,
  Description,
  sidebarData,
}: HeroData) {
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
      style={{ backgroundImage: `url(${heroimg.src})`, backgroundRepeat: 'no-repeat' }}
    >
      <div className="backdrop-brightness-50 h-full flex items-center px-5">
        <div className="max-w-1244 mx-auto">
          <div className="grid grid-cols-12">
            <Heading
              level={1}
              spanText={spanText}
              className="font-900 uppercase md:leading-none leading-normal xl:mb-8 md:mb-4  col-span-12"
            >
              {heroTitle}
            </Heading>
          </div>
          <div className="grid grid-cols-12">
            <Heading
              level={1}
              className="uppercase text-left font-900 md:leading-none leading-normal col-span-12 md:col-start-2"
            >
              {titleSub}
            </Heading>
          </div>
          <div className="grid grid-cols-12">
            <div className="md:my-9 mb-8 mt-6 md:text-md text-1sm text-white md:col-span-6 col-span-12 md:col-start-2">
              {Description && (
                <RichText
                  content={Description}
                  className={`text-gray-main font-general-regular fade-up`}
                />
              )}
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="md:col-start-2 col-span-12 flex md:flex-row flex-col">
              {/* <Button variant="primary" href="#" className="md:mb-0 mb-6 text-center">
                Book A demo
              </Button> */}
              <DemoButton sidebarData={sidebarData} />
              <Button variant="secondary" href="/about" className="text-center">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
