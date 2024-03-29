import React from 'react'
import Image from 'next/image'

import ImageBoxWithText from '../ImageBoxes'
import Button from '../ui/Buttons'
import DemoButton from '../ui/DemoButton'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

interface ImageBoxProps {
  imageUrl: any
  title: string
  spanText?: string
  description: string
  content: string
  hiddenCTA?: boolean
  buttonTwo?: string
  buttonTwoLink?: string | '#'
  sidebarData?: any
  backGroundColor?: string
}

const ImageBoxesWrapper = ({
  imageUrl,
  title,
  spanText,
  content,
  items,
  hiddenCTA,
  buttonTwo,
  buttonTwoLink,
  sidebarData,
  backGroundColor,
}: any) => {
  const backgroundColorClass = backGroundColor ? `bg-${backGroundColor}` : 'bg-black'
  return (
    <div className="px-5">
      <div className="container md:py-24 py-20">
        {spanText && (
          <Heading
            level={2}
            spanText={spanText && spanText}
            className={`font-900 uppercase mb-0 leading-none text-center`}
          ></Heading>
        )}
        {title && (
          <Heading level={2} className="font-900 uppercase mb-8 text-center">
            {title}
          </Heading>
        )}

        {content && (
          <RichText
            content={content}
            className={`font-400 pb-8 md:text-base text-1sm custom-content-class content-box-data max-w-3xl mx-auto text-center`}
          />
        )}

        <div className="flex flex-col justify-center items-center ">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {items?.map(item => (
              <ImageBoxWithText {...item} />
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          {hiddenCTA ? (
            <div className="grid grid-cols-12">
              <div className="col-start-1 col-span-12 flex md:flex-row flex-col mx-auto">
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
        </div>
      </div>
    </div>
  )
}
export default ImageBoxesWrapper
