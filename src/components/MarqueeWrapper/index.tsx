import React from 'react'
import Marquee from 'react-fast-marquee'

import MarqueeTags from '../Marquee'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

interface TagsProps {
  text: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  spanText?: string
  Title?: string
  description?: string
  direction?: 'left' | 'right'
  speed?: number
}

export const MarqeeWrapper = ({
  text,
  backgroundColor,
  borderColor,
  textColor,
  spanText,
  Title,
  description,
  items,
  direction,
  speed,
}: any) => {
  return (
    <div className=" bg-white md:pb-24 pb-20">
      <div className="px-5">
        {(Title || description) && (
          <div className="container md:pt-16 pt-10 md:pb-20 pb-6">
            <div className="grid grid-cols-12">
              {Title && (
                <div className="col-span-12 col-start-1 md:text-left text-center">
                  <Heading
                    level={3}
                    spanText={spanText}
                    className="font-900 uppercase mb-0 pb-8 text-black"
                  >
                    {Title}
                  </Heading>
                </div>
              )}
              {description && (
                <RichText
                  content={description}
                  className={`text-black col-span-12 col-start-1 md:text-left text-center text-3xl`}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <Marquee
        autoFill={true}
        speed={speed ? speed : 30}
        direction={direction ? direction : 'left'}
      >
        {items?.map((item, index) => (
          <>
            <MarqueeTags key={index} {...item} />
          </>
        ))}
      </Marquee>
    </div>
  )
}
