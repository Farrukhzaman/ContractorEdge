// 'use client'
import type { Metadata } from 'next'

import { CMSWrapper } from '../components/CMSWrapper'
import { getPayloadClient } from '../getPayload'
import MainLayout from '../layouts/MainLayout'
import { SLUGS } from '../slug'

import easytouse from '/public/images/easy-to-use.png'
import screen1 from '/public/images/screen1.png'
import streamlining from '/public/images/streamlining.png'
import timetracking from '/public/images/time-tracking.png'
import golive from '/public/svg/go-live.svg'
import implementation from '/public/svg/implementation.svg'
import signups from '/public/svg/signup.svg'
import training from '/public/svg/training.svg'

export default function Home({ page, DemoButton }) {
  return (
    <MainLayout sidebarData={DemoButton}>
      {page?.layout?.map(block => (
        <CMSWrapper key={`${block.id}`} {...block} pageProps={page} />
      ))}
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const payload = await getPayloadClient()

  try {
    const pageQuery = await payload.find({
      collection: SLUGS.collections.pages,
      where: {
        slug: {
          equals: 'home',
        },
      },
    })

    const page = pageQuery.docs[0]

    const pageTitle = page?.meta?.title
    const pageDescription = page?.meta?.description
    const pageUrl = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${page?.slug}`
    const metaImage = page?.meta?.image?.url

    const demoForm = await payload.findGlobal({
      slug: SLUGS.globals.demoform,
    })
    if (!pageQuery.docs[0]) {
      return { notFound: true }
      throw new Error('Home page not found.')
    }

    return {
      props: {
        page: {
          ...pageQuery.docs[0],
          meta: {
            title: `Contractors Edge | ${pageTitle || page?.title}`,
            description:
              pageDescription ||
              'Contractors Edge simplifies Prevailing Wage compliance by offering software that saves government contractors time and money by providing accurate wage determinations & properly allocating fringe benefits.',
            url: pageUrl,
            metaImage: metaImage || '',
          },
        },
        DemoButton: demoForm,
      },
    }
  } catch (error) {
    return {
      props: {
        page: null, // You can handle this condition in your component
      },
    }
  }
}
