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

interface ContentBoxProps {
  title?: string
  spanText?: string
  spanSubText?: string
  content: string
  backGroundColor?: string
  sectionTopBottomPadding?: 'Normal' | 'Medium' | 'Large'
  sectionId?: string
}

export default function ContentBoxComponent({
  title,
  spanText,
  spanSubText,
  content,
  backGroundColor,
  sectionTopBottomPadding,
  sectionId,
}: ContentBoxProps) {
  const backgroundColorClass = backGroundColor ? `bg-${backGroundColor}` : 'bg-black'

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
        <div className="grid grid-rows-2 gap-5 items-center">
          <Heading
            level={3}
            spanText={spanText && spanText}
            className={`${
              backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
            } font-900 uppercase mb-0`}
          >
            {spanSubText && spanSubText}
          </Heading>

          <Heading
            level={3}
            className={`font-900 uppercase mb-0 pb-6 text-black ${
              backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
            }`}
          >
            {title && title}
          </Heading>

          {content && (
            <RichText
              content={content}
              className={`font-400 pb-8 md:text-base text-1sm custom-content-class content-box-data ${
                backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
              }`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
