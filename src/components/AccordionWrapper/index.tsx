// components/AccordionWrapper.tsx
import React, { useState } from 'react'

import Accordion from '../Accordion'
import Button from '../ui/Buttons'
import Heading from '../ui/headings'

const AccordionWrapper = ({ title, items }: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImage, setActiveImage] = useState('')
  const [progress, setProgress] = useState(0)

  return (
    <div className="bg-simpifying-image bg-no-repeat bg-right-bottom px-5 lg:bg-auto md:bg-[length:34.25%] bg-[length:300px]">
      <div className="container md:py-24 py-20">
        <Heading
          level={2}
          spanText="SIMPLIFYING"
          className="font-900 uppercase mb-0 text-center"
        ></Heading>
        <Heading level={2} className="font-900 uppercase mb-0 text-center">
          {title}
        </Heading>
        <Accordion
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setActiveImage={setActiveImage}
          setProgress={setProgress}
        />
        <Button
          variant="primary"
          href="/solutions"
          className="lg:w-auto w-full text-center lg:inline-block block"
        >
          View all features
        </Button>
      </div>
    </div>
  )
}

export default AccordionWrapper
