import React, { ReactNode } from 'react'
import classNames from 'classnames'
// type Levels = Number
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  id?: string
  style?: React.CSSProperties
  children?: ReactNode
  spanText?: string
  lineBreak?: boolean
}

export default function Heading({
  level = 5,
  className,
  id,
  style,
  children,
  spanText,
  lineBreak = false,
}: HeadingProps) {
  const components = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  }
  const HeadingTag = components[level] as keyof JSX.IntrinsicElements

  return (
    <>
      <HeadingTag
        className={classNames(
          'font-bold',
          {
            'xxl:text-6xl xl:text-5xl lg:text-4.5xl md:text-4xl sm:text-3.5xl text-3xl':
              level === 1,
            'xl:text-5xl lg:text-4.5xl md:text-4xl text-3xl': level === 2,
            'xl:text-4xl lg:text-3.5xl text-3xl': level === 3,
            'md:text-3xl text-xl': level === 4,
            'text-2xl': level === 5,
            'lg:text-xl md:text-base sm:text-xl text-md': level === 6,
          },
          className, // Use the passed className prop here
        )}
        id={id}
        style={style}
      >
        {spanText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gradient-secondary to-gradient-primary">
            {spanText}
          </span>
        )}{' '}
        {lineBreak && <br />} {children}
      </HeadingTag>
    </>
  )
}
