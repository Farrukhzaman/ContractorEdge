import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useDemoButton } from '../../DemoButtonContext'
import { imageLoader } from '../ImageLoader'
import Button from '../ui/Buttons'
import DemoButton from '../ui/DemoButton'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

import Appstore from '/public/svg/appstore.svg'
import Googlestore from '/public/svg/gstore.svg'

interface ContentComponentMIProps {
  backgroundImage?: any
  title?: string
  spanText?: string
  spanSubText?: string
  content: string
  image?: any
  imageSecondary?: any
  imageThird?: any
  imagePosition?: 'left' | 'right'
  imageMargin?: number
  imageBorder?: 'Yes' | 'No'
  hiddenCTA?: boolean
  className?: string
  showApps?: boolean
  backGroundColor?: string
  buttonOne?: string
  buttonTwo?: string
  buttonOneLink?: string | '#'
  buttonTwoLink?: string | '#'
  appleLink?: string | '#'
  googleLink?: string | '#'
  sectionId?: string
  sidebarData?: any
}

export default function ContentComponentMultiImages({
  backgroundImage,
  title,
  spanText,
  spanSubText,
  content,
  image,
  imageSecondary,
  imageThird,
  imagePosition,
  imageBorder,
  className,
  hiddenCTA,
  showApps,
  backGroundColor,
  buttonOne,
  buttonOneLink,
  buttonTwo,
  buttonTwoLink,
  appleLink,
  googleLink,
  sectionId,
  sidebarData,
}: ContentComponentMIProps) {
  const backgroundColorClass = backGroundColor ? `bg-${backGroundColor}` : 'bg-black'
  const imagePositionClass =
    imagePosition === 'right'
      ? 'md:col-span-6 col-span-12 md:col-start-8 col-start-1 md:text-right md:order-last relative -order-1'
      : 'md:col-span-6 col-span-12 col-start-1'
  const ImageBorderClass = imageBorder ? 'border-8 rounded-lg border-accordion-border' : ''

  const HeroSectionBG: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage?.url})`,
    backgroundPosition: 'bottom right',
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
      className={`px-5 sm:bg-auto bg-[length:300px] ${backgroundColorClass}`}
      id={`${sectionId && sectionId}`}
      style={HeroSectionBG}
    >
      <div className="container lg:pt-72 lg:pb-56 md:py-32 py-20 items-center">
        <div className="grid grid-cols-12 gap-5 items-center">
          {/* Content Area */}
          <div
            className={`${
              imagePosition === 'right'
                ? 'md:col-span-6 col-span-12 md:col-start-1 col-start-1'
                : 'md:col-span-6 col-span-12 md:col-start-7 col-start-1 order-2'
            }`}
          >
            <div className="grid grid-cols-7">
              <div
                className={`${
                  imagePosition === 'right'
                    ? 'md:col-span-10 col-span-12 md:col-start-1 col-start-1 md:text-left text-center'
                    : 'md:col-span-10 col-span-12 md:col-start-1 col-start-1 md:text-left text-center'
                }`}
              >
                <Heading
                  level={1}
                  spanText={spanText && spanText}
                  className="font-900 uppercase mb-0"
                >
                  {spanSubText && spanSubText}
                </Heading>
              </div>
              <div
                className={`${
                  imagePosition === 'right'
                    ? 'md:col-span-10 col-span-12 md:col-start-2 col-start-1 md:text-left text-center'
                    : 'md:col-span-10 col-span-12 md:col-start-2 col-start-2 md:text-left text-center'
                }`}
              >
                <Heading
                  level={1}
                  className={`font-900 uppercase mb-0 md:pb-10 pb-6 text-black ${
                    backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
                  }`}
                >
                  {title && title}
                </Heading>
              </div>
            </div>

            <div className="grid grid-cols-7">
              <div
                className={`custom-content-class ${
                  imagePosition === 'right'
                    ? 'md:col-span-6 col-span-12 md:col-start-2 col-start-1'
                    : 'md:col-start-2 col-start-1 col-span-12'
                }`}
              >
                {content && (
                  <RichText
                    content={content}
                    className={`font-400 pb-8 md:text-base text-1sm ${
                      backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
                    }`}
                  />
                )}
                {hiddenCTA ? (
                  <div className="grid grid-cols-12">
                    <div className="col-start-1 col-span-12 flex md:flex-row flex-col">
                      {/* {buttonOne && (
                        <Button
                          variant="primary"
                          href={buttonOneLink ? buttonOneLink : '#'}
                          className="md:mb-0 mb-6 text-center"
                        >
                          {buttonOne}
                        </Button>
                      )} */}
                      <DemoButton sidebarData={sidebarData} />
                      {buttonTwo && (
                        <Button
                          className={`${
                            backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
                          }`}
                          variant="secondary"
                          href={buttonTwoLink ? buttonTwoLink : '#'}
                          color="text-black text-center"
                        >
                          {buttonTwo}
                        </Button>
                      )}
                    </div>
                  </div>
                ) : null}

                {showApps === true ? (
                  <div className="grid grid-cols-12">
                    <div className="col-start-1 col-span-12 gap-x-6 flex md:flex-row flex-row">
                      <Link href={appleLink ? appleLink : '#'}>
                        <Image src={Appstore} alt="Apple Store" />
                      </Link>
                      <Link href={googleLink ? googleLink : '#'}>
                        <Image src={Googlestore} alt="Google Store" />
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* End Content Area */}
          <div className={`${imagePositionClass} md:my-0 my-24`}>
            {imageSecondary && (
              <Image
                src={imageSecondary.url}
                loader={imageLoader}
                alt={imageSecondary.alt}
                width={imageSecondary.width}
                height={imageSecondary.height}
                className="absolute -top-16 -right-14 max-w-[271px]"
              />
            )}
            <Image
              src={image.url}
              loader={imageLoader}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className={`mx-auto ${ImageBorderClass}`}
            />
            {imageThird && (
              <Image
                src={imageThird.url}
                loader={imageLoader}
                alt={imageThird.alt}
                width={imageThird.width}
                height={imageThird.height}
                className=" absolute -bottom-48 m-auto left-0 right-0 max-w-[271px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
