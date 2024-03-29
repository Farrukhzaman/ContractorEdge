'use client'
import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import Image from 'next/image'

import { imageLoader } from '../ImageLoader'
import { RichText } from '../ui/RichText'

import 'react-circular-progressbar/dist/styles.css'

interface AccordionItemProps {
  title: string
  description: string
  image: any
  isOpen: boolean
  isBorder: boolean
  onItemClick: () => void
}

export const AccordionItem = ({
  title,
  description,
  image,
  isOpen,
  isBorder,
  onItemClick,
}: AccordionItemProps) => {
  const [progress, setProgress] = useState(0)

  const isborder = isBorder ? 'border-8 rounded-lg border-accordion-border' : ''

  useEffect(() => {
    let progressInterval

    if (isOpen) {
      progressInterval = setInterval(() => {
        setProgress(prevProgress => {
          // const newProgress = (prevProgress + 1) % 102
          const newProgress = (prevProgress + 1) % 102
          if (newProgress === 0) clearInterval(progressInterval)
          return newProgress
        })
      }, 55)
    } else {
      setProgress(0) // Reset progress to 0 when accordion item is closed
      clearInterval(progressInterval)
    }

    return () => {
      clearInterval(progressInterval)
    }
  }, [isOpen, progress])

  // console.log('Image' + image)

  return (
    <>
      <div className="lg:col-span-5 col-span-12 col-start-1 lg:col-end-6">
        <div className="border border-border-color rounded-tl-2xl mb-6 p-6 transition-all ease-in duration-300">
          <div
            className={`flex cursor-pointer text-xl font-900 uppercase ${
              isOpen ? 'text-strong-orange' : 'bg-gray-200'
            }`}
            onClick={onItemClick}
          >
            <div className="mr-4">
              {isOpen && (
                <CircularProgressbar
                  value={progress}
                  styles={{
                    root: {
                      width: '32px',
                      height: '32px',
                    },
                    path: {
                      stroke: `rgba(194, 145, 46, 1)`,
                      strokeWidth: '4px',
                      strokeLinecap: 'butt',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    trail: {
                      stroke: '#424242',
                      strokeWidth: '4px',
                      strokeLinecap: 'butt',
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                  }}
                />
              )}
            </div>
            {title}
          </div>
          {isOpen && (
            <div className="pt-4 transition-all ease-in duration-300">
              <div className="pl-12 transition-all ease-in duration-300">
                <RichText
                  content={description}
                  className={`text-gray-main font-general-regular fade-up`}
                />
              </div>
              <div className="lg:hidden lg:mt-0 mt-8">
                <Image
                  src={image.url}
                  loader={imageLoader}
                  alt={title}
                  width={image.width}
                  height={image.height}
                  className={`${isborder} mt-2 fade-in`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-start-7 col-span-6 lg:flex items-center hidden absolute right-0 inset-0">
        {isOpen && (
          <Image
            loader={imageLoader}
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className={`${isborder} mt-2 fade-in`}
          />
        )}
      </div>
    </>
  )
}

interface AccordionProps {
  items: AccordionItemProps[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  setActiveImage: (image: string) => void
  setProgress: (progress: number) => void
}

const Accordion = ({
  items,
  activeIndex,
  setActiveIndex,
  setActiveImage,
  setProgress,
}: AccordionProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % items.length
      setActiveIndex(nextIndex)
      setProgress(0)
    }, 6000)

    return () => {
      clearInterval(timer)
    }
  }, [activeIndex, items, setActiveIndex, setProgress])

  const onItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
    setActiveImage(index === activeIndex ? '' : items[index].image)
    setProgress(0)
  }

  return (
    <div className="grid grid-cols-12 md:pt-20 pt-8 mb-9 relative">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={index === activeIndex}
          onItemClick={() => onItemClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
