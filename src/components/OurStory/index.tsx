import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { useDemoButton } from '../../DemoButtonContext'
import Button from '../ui/Buttons'
import DemoButton from '../ui/DemoButton'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

import Appstore from '/public/svg/appstore.svg'
import Googlestore from '/public/svg/gstore.svg'

interface ContentComponentProps {
  title?: string
  spanText?: string
  spanSubText?: string
  content: string
  image?: any
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
  sectionTopBottomPadding?: 'Normal' | 'Medium' | 'Large'
  sectionId?: string
  sidebarData?: any
  quote?: string
  author?: string
}

export default function OurStory({
  title,
  spanText,
  spanSubText,
  content,
  image,
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
  sectionTopBottomPadding,
  sectionId,
  sidebarData,
  quote,
  author,
}: ContentComponentProps) {
  // const { toggleSlidingComponent } = useDemoButton()
  // sidebarData = {
  //   spanText: 'Your span text',
  //   formHeading: 'Your form heading',
  //   formFields: [
  //     /* Define your form fields here */
  //   ],
  // }
  const backgroundColorClass = backGroundColor ? `bg-${backGroundColor}` : 'bg-black'
  const imagePositionClass =
    imagePosition === 'right'
      ? 'md:col-span-6 col-span-12 md:col-start-8 col-start-1 md:text-right md:order-last relative -order-1'
      : 'md:col-span-6 col-span-12 col-start-1'
  const ImageBorderClass = imageBorder ? 'border-8 rounded-lg border-accordion-border' : ''
  const SectionPadding =
    sectionTopBottomPadding === 'Normal'
      ? 'md:py-12 py-10'
      : sectionTopBottomPadding === 'Medium'
      ? 'md:py-24 py-20'
      : sectionTopBottomPadding === 'Large'
      ? 'lg:pt-72 md:py-32 py-20'
      : 'md:pb-24 pb-20  md:pt-24 pt-10'
  return (
    <div
      className={`px-5 ${SectionPadding} ${backgroundColorClass}`}
      id={`${sectionId && sectionId}`}
    >
      <div className="container">
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
                  level={3}
                  spanText={spanText && spanText}
                  className={`${
                    backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
                  } font-900 uppercase mb-0`}
                >
                  {spanSubText && spanSubText}
                </Heading>
              </div>
              <div
                className={`${
                  imagePosition === 'right'
                    ? 'md:col-span-10 col-span-12 md:col-start-2 col-start-1 md:text-left text-center'
                    : 'md:col-span-10 col-span-12 md:col-start-2 col-start-1 md:text-left text-center'
                }`}
              >
                <Heading
                  level={3}
                  className={`font-900 uppercase mb-0 pb-6 text-black ${
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
                {quote && (
                  <div className=" bg-quote-bg rounded-tl-lg p-6">
                    <RichText
                      content={quote}
                      className={`font-400 text-strong-orange md:text-base text-1sm pb-4`}
                    />
                    {author && <span>{author}</span>}
                  </div>
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

                      {/* <DemoButton /> */}
                      <DemoButton sidebarData={sidebarData} />
                      {/* <button onClick={openDemoForm}>Open Demo Form</button> */}
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
          <div className={`${imagePositionClass}`}>
            {image?.url && (
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className={`mx-auto ${ImageBorderClass}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
