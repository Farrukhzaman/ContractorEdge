import React from 'react'
import Image from 'next/image'

import { CMSWrapper } from '../../components/CMSWrapper'
import ContentComponent from '../../components/ContentComponent'
import Heading from '../../components/ui/headings'
import { getPayloadClient } from '../../getPayload'
import { SLUGS } from '../../slug'

const contactcontent = [
  {
    content: 'Have you got a testing challenge in your business? Send us a message',
    hiddenCTA: false,
    showApps: false,
  },
]

const ContactDetails = {
  phone: '(619) 323-2886',
  email: 'info@contractersedge.com',
  location: (
    <div>
      350 Tenth Avenue Suite 1400
      <br />
      San Diego, CA 92101
    </div>
  ),
}

export default async function Contact() {
  const payload = await getPayloadClient()
  const pageQuery = await payload.find({
    collection: SLUGS.collections.pages,
    where: {
      slug: {
        equals: 'contact',
      },
    },
  })

  // console.log(pageQuery.docs[0])

  if (!pageQuery.docs[0]) {
    throw new Error('Contact page not found.')
  }
  return (
    <>
      {pageQuery.docs[0]?.layout?.map(block => (
        <CMSWrapper key={`${block.id}`} {...block} pageProps={pageQuery.docs[0]} />
      ))}
      {/* <div className="bg-simpifying-image bg-no-repeat bg-right-bottom px-5 lg:bg-auto md:bg-[length:34.25%] bg-[length:300px] items-center">
        <div className="container lg:pt-72 lg:pb-48 md:py-32 py-20 h-full items-center">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 col-span-12 col-start-1">
              <div className=" grid grid-cols-7">
                <div className="md:text-left text-center col-span-7">
                  <Heading
                    level={1}
                    spanText="We'd love"
                    className="font-900 uppercase mb-0"
                  ></Heading>
                </div>
                <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                  <Heading level={1} className="font-900 uppercase mb-0">
                    to talk
                  </Heading>
                </div>
                <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                  {contactcontent &&
                    contactcontent.map((data, index) => (
                      <ContentComponent
                        key={index}
                        content={data.content}
                        className="text-white"
                        hiddenCTA={data.hiddenCTA}
                      />
                    ))}

                  <Footercontact {...ContactDetails} />
                </div>
              </div>
            </div>
            <div className="md:col-start-8 col-start-1 md:col-span-5 col-span-12 md:text-right text-center relative bg-white p-10"></div>
          </div>
        </div>
      </div> */}
    </>
  )
}
