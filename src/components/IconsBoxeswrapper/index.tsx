import React from 'react'
import Image from 'next/image'

import IconBoxWithText from '../IconsBoxes'
import Heading from '../ui/headings'

interface IconBoxProps {
  title: string
  spanTitle: string
  spanSubTitle: string
  number: number
  imageUrl: any
  boxTitle: string
  description: string
  sectionId?: string
}
const IconBoxWrapper = ({
  title,
  spanTitle,
  spanSubTitle,
  number,
  imageUrl,
  boxTitle,
  description,
  items,
  sectionId,
}: any) => {
  return (
    <div className="bg-white" id={`${sectionId && sectionId}`}>
      <div className="px-5">
        <div className="container md:pt-24 pt-20 md:pb-75 pb-10 md:mb-0 mb-7">
          <div className="grid grid-cols-12">
            <div className=" col-span-10">
              <Heading
                level={3}
                spanText={spanTitle && spanTitle}
                className="font-900 uppercase mb-0 text-black"
              >
                {spanSubTitle && spanSubTitle}
              </Heading>
            </div>
            <div className="col-span-10 md:col-start-2 col-start-1">
              <Heading level={3} className="font-900 uppercase mb-0 text-black">
                {title && title}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers relative pb-28">
        <div className="md:border-t border-l border-black md:h-px h-full absolute md:w-full w-1 md:top-[20px] top-[45px] md:left-0 left-[35px] z-0"></div>
        <div className="px-5">
          <div className="container">
            <div className="grid md:grid-cols-4 grid-cols-1 md:col-start-1 col-start-2 xl:gap-15 gap-5 col-span-12">
              {items.map((item, index) => (
                <div className="md:p-0 pl-12">
                  <span className="bg-white md:w-10 w-8 md:h-10 h-7 border rounded-full flex justify-center items-center border-black text-black z-10 md:ml-0 -ml-12 relative md:top-0 top-[45px]">
                    {index + 1}
                  </span>
                  <IconBoxWithText {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="md:p-0 pl-12">
    //   {number && (
    //     <span className="bg-white md:w-10 w-8 md:h-10 h-7 border rounded-full flex justify-center items-center border-black text-black z-10 md:ml-0 -ml-12 relative md:top-0 top-[45px]">
    //       {number}
    //     </span>
    //   )}
    //   <div className="bg-strong-orange rounded-tl-lg flex justify-center items-center w-16 h-16 md:my-8 mb-6">
    //     {imageUrl && (
    //       <Image
    //         src={imageUrl.src}
    //         alt={title}
    //         className="mx-auto"
    //         width={imageUrl.width}
    //         height={imageUrl.height}
    //       />
    //     )}
    //   </div>
    //   {title && (
    //     <Heading level={6} className="uppercase font-900 leading-none pb-4 mb-0 text-black">
    //       {title}
    //     </Heading>
    //   )}
    //   {description && <p className="p-0 m-0 text-base text-black">{description}</p>}
    // </div>
  )
}

export default IconBoxWrapper
