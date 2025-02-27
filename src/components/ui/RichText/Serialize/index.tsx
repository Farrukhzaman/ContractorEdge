import React, { Fragment, useRef } from 'react'
import escapeHTML from 'escape-html'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

import { useIsomorphicLayoutEffect } from '../../../../hooks/useIsomorphicLayoutEffect'

type Node = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Node[]
  url?: string
  [key: string]: unknown
  newTab?: boolean
}

export type CustomRenderers = {
  [key: string]: (args: { node: Node; Serialize: SerializeFunction; index: number }) => JSX.Element // eslint-disable-line
}

type SerializeFunction = React.FC<{
  content?: Node[]
  customRenderers?: CustomRenderers
  animation?: string
}>

const isText = (value: any): boolean =>
  typeof value === 'object' && value !== null && typeof value.text === 'string'

export const Serialize: SerializeFunction = ({ content, customRenderers }) => {
  let headingRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      if (headingRef?.current) {
        gsap.set(headingRef?.current, { autoAlpha: 0, y: 50 })
        gsap.to(headingRef?.current, {
          scrollTrigger: {
            trigger: headingRef?.current,
            toggleActions: 'play',
            start: 'top bottom',
          },
          duration: 1,
          autoAlpha: 1,
          y: 0,
          // delay: 0.2,
          ease: 'power2.inOut',
          stagger: 2,
        })
      }
    })
    return () => ctx.revert()
  })
  return (
    <Fragment>
      {content?.map((node, i) => {
        if (isText(node)) {
          // @ts-expect-error
          let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

          if (node.bold) {
            text = <strong key={i}>{text}</strong>
          }

          if (node.code) {
            text = <code key={i}>{text}</code>
          }

          if (node.italic) {
            text = <em key={i}>{text}</em>
          }

          if (node.underline) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            )
          }

          if (node.strikethrough) {
            text = (
              <span style={{ textDecoration: 'line-through' }} key={i}>
                {text}
              </span>
            )
          }

          return <Fragment key={i}>{text}</Fragment>
        }

        if (!node) {
          return null
        }

        if (
          customRenderers &&
          customRenderers[node.type] &&
          typeof customRenderers[node.type] === 'function'
        ) {
          return customRenderers[node.type]({ node, Serialize, index: i })
        }

        switch (node.type) {
          case 'br':
            return <br key={i} />

          case 'h1':
            return (
              <h1 key={i} ref={headingRef}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h1>
            )

          case 'h2':
            return (
              <h2 key={i} ref={headingRef}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h2>
            )

          case 'h3':
            return (
              <h3 key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h3>
            )

          case 'h4':
            return (
              <h4 key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h4>
            )

          case 'h5':
            return (
              <h5 key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h5>
            )

          case 'h6':
            return (
              <h6 key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h6>
            )

          case 'quote':
            return (
              <blockquote key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </blockquote>
            )

          case 'ul':
            return (
              <ul key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </ul>
            )

          case 'ol':
            return (
              <ol key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </ol>
            )

          case 'li':
            return (
              <li key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </li>
            )

          case 'link':
            return (
              <Link
                href={escapeHTML(node.url)}
                key={i}
                {...(node.newTab
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
              >
                <Serialize content={node.children} customRenderers={customRenderers} />
              </Link>
            )

          default:
            return (
              <p key={i} className="richText-para">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </p>
            )
        }
      })}
    </Fragment>
  )
}
