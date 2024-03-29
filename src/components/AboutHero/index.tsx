import React from 'react'

import { Form } from '../Forms'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

interface AboutHeroComponentProps {
  title?: string
  spanText?: string
  SubTitle?: string
  Content?: string
  backGroundColor?: string
  id?: string
}
export default function AboutHero({
  title,
  spanText,
  SubTitle,
  Content,
  backGroundColor,
  id,
}: AboutHeroComponentProps) {
  const backgroundColorClass = backGroundColor ? `bg-${backGroundColor}` : 'bg-black'
  return (
    <div className="pt-52 pb-20" id={id && id}>
      <Heading
        level={1}
        spanText={spanText && spanText}
        className="font-900 uppercase mb-0 text-center"
      >
        {title && title}
      </Heading>
      {SubTitle && (
        <Heading level={1} className="font-900 uppercase mb-6 text-center">
          {SubTitle}
        </Heading>
      )}
      {Content && (
        <Heading level={4} className="">
          <RichText
            content={Content}
            className={`font-400 mb-0 text-center max-w-4xl mx-auto leading-40 ${
              backgroundColorClass == 'bg-black' ? 'text-white' : 'text-black'
            }`}
          />
        </Heading>
      )}
    </div>
  )
}
