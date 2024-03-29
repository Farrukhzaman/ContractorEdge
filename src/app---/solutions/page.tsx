import React from 'react'
import Image from 'next/image'
import payload from 'payload'

import { CMSWrapper } from '../../components/CMSWrapper'
import ContentComponent from '../../components/ContentComponent'
import IconBoxWithText from '../../components/IconsBoxes'
import InnerHero from '../../components/innerHeroMid'
import Heading from '../../components/ui/headings'
import { getPayloadClient } from '../../getPayload'
import { getPageData } from '../../services/page'
import { SLUGS } from '../../slug'

import activeemployee from '/public/images/active-employee.png'
import automaticimg from '/public/images/automatic.jpg'
import customizedimg from '/public/images/customized.jpg'
import employee from '/public/images/employee.png'
import exploreImage from '/public/images/explore-feature.jpg'
import fringeimg from '/public/images/fringe.jpg'
import payrollimg from '/public/images/payrollimg.jpg'
import reportingimg from '/public/images/reporting.png'
import solutionheroimg from '/public/images/solutions-hero.jpg'
import wagesimg from '/public/images/wages.jpg'
import golive from '/public/svg/go-live.svg'
import implementation from '/public/svg/implementation.svg'
import signups from '/public/svg/signup.svg'
import training from '/public/svg/training.svg'

const explorefeatures = [
  {
    content:
      'Software that saves you time and makes your life easier. For government contractors who want to obtain accurate wage determinations and properly allocate fringe benefits.',
    hiddenCTA: true,
    showApps: false,
  },
]

const customized = [
  {
    title:
      'Our software allows you to easily access all of your reports, such as payroll, personal data, records, 401k benefits, etc..',
    content:
      'Our reports are streamlined and detailed, while being user-friendly and easily downloadable.',
    hiddenCTA: false,
    showApps: false,
  },
]

const wages = [
  {
    title:
      'Contractors Edge helps contractors effectively determine the correct wage determination for their projects.',
    content:
      'The app allows contractors to track employee hours, locations, & classifications. This information is used to efficiently track fringe allocations across multiple classifications to ensure compliance with prevailing wage requirements.',
    hiddenCTA: false,
    showApps: false,
  },
]

const reporting = [
  {
    title:
      'Accurately capture remote workers’ clock-in and out times so you can manage labor costs in real-time.',
    content:
      'Geolocation ensures your prevailing wage rate is correct for that worker’s task and admin review allows quick and easy corrections when clock-ins or outs are incorrectly logged by workers.',
    hiddenCTA: false,
    showApps: true,
  },
]

const payroll = [
  {
    title:
      'After successfully running your payroll, our software simplifies the process by allowing you to effortlessly import all the relevant data.',
    content:
      ' This seamless integration enables you to generate compliant Certified Payroll reports without any hassle, saving you time and ensuring accuracy in your records.',
    hiddenCTA: false,
    showApps: false,
  },
]

const automatic = [
  {
    title: 'Pay increases no longer need to be a guessing game.',
    content:
      'Our software incorporates predetermined wage increases on their effective dates, automatically increasing payroll rates. These transparent rate increases establish trust and longterm sustainability amongst employees and employers.',
    hiddenCTA: false,
    showApps: false,
  },
]

const fringe = [
  {
    title: 'Create your Fringe Benefit Statement with the click of a button!',
    content:
      'These custom reports are generated with the fringe benefits provided by the employer, and fringe benefit credits are allocated automatically based on the classification worked on the project and employee enrollment status.',
    hiddenCTA: false,
    showApps: false,
  },
  {
    content:
      'Submit your required Fringe Benefit Statements with peace of mind, knowing that your fringe allocation is correct and matches your Certified Payroll Reports perfectly.',
    hiddenCTA: false,
    showApps: false,
  },
]

const iconBoxes = [
  {
    number: 1,
    imageUrl: signups,
    title: 'SIGN UP',
    description: 'Reach out for a custom demo of the software.',
  },
  {
    number: 2,
    imageUrl: implementation,
    title: 'IMPLEMENTATION',
    description:
      'Work with your account manager to enter all your pertinent information into the system.',
  },
  {
    number: 3,
    imageUrl: training,
    title: 'TRAINING',
    description: 'We train you so you are as comfortable in the system as we are.',
  },
  {
    number: 4,
    imageUrl: golive,
    title: 'GO LIVE',
    description: 'You’re ready to start using the software every day.',
  },
]

const SolutionHerocontent = {
  title: 'maKE',
  span_text: 'Let’s',
  title_sub: 'YOUR LIFE EASIER',
  backgroundImage: solutionheroimg,
}

export default async function Solutions() {
  const payload = await getPayloadClient()
  const pageQuery = await payload.find({
    collection: SLUGS.collections.pages,
    where: {
      slug: {
        equals: 'solutions',
      },
    },
  })

  // console.log(pageQuery.docs[0])

  if (!pageQuery.docs[0]) {
    throw new Error('Solution page not found.')
  }
  return (
    <>
      {pageQuery.docs[0]?.layout?.map(block => (
        <CMSWrapper key={`${block.id}`} {...block} pageProps={pageQuery.docs[0]} />
      ))}
      {/* <div className="bg-simpifying-image bg-no-repeat bg-right-bottom px-5 lg:bg-auto md:bg-[length:34.25%] bg-[length:300px] items-center">
        <div className="container lg:pt-72 lg:pb-48 md:py-32 py-20 h-full items-center">
          <div className="grid grid-cols-12 gap-20 items-center">
            <div className="md:col-span-6 col-span-12 col-start-1">
              <div className=" grid grid-cols-7">
                <div className="md:text-left text-center col-span-7">
                  <Heading
                    level={1}
                    spanText="Explore"
                    className="font-900 uppercase mb-0"
                  ></Heading>
                </div>
                <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                  <Heading level={1} className="font-900 uppercase mb-0">
                    software
                    <br />
                    features
                  </Heading>
                </div>
                <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                  {explorefeatures.map((data, index) => (
                    <ContentComponent
                      key={index}
                      content={data.content}
                      className="text-white"
                      hiddenCTA={data.hiddenCTA}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-start-7 col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
              <Image
                src={activeemployee}
                alt="activeemployee"
                className="absolute -top-16 -right-14"
              />
              <Image
                src={exploreImage}
                alt="exploreImage"
                className="md:mr-0 md:ml-auto border-8 rounded-lg border-accordion-border"
              />
              <Image
                src={employee}
                alt="employee"
                className=" absolute -bottom-28 m-auto left-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image
              src={customizedimg}
              alt="exploreImage"
              className="md:mr-auto md:ml-0 border-8 rounded-lg border-accordion-border"
            />
          </div>

          <div className="md:col-span-6 col-span-12 md:col-start-7 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading
                  level={2}
                  spanText="Customized"
                  className="font-900 uppercase mb-0"
                ></Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  REPORTING
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {customized.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="md:col-span-6 col-span-12 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading level={2} spanText="WAGE" className="font-900 uppercase mb-0"></Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  DETERMINATION
                  <br />
                  Rates
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {wages.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-start-7 col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image
              src={wagesimg}
              alt="wagesimg"
              className="md:mr-0 md:ml-auto border-8 rounded-lg border-accordion-border"
            />
          </div>
        </div>
      </div>

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image src={reportingimg} alt="exploreImage" className="md:mr-auto md:ml-0" />
          </div>

          <div className="md:col-span-6 col-span-12 md:col-start-7 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading level={2} spanText="Mobile" className="font-900 uppercase mb-0">
                  tIME
                </Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  TRACKING
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {reporting.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InnerHero {...SolutionHerocontent} />

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image
              src={payrollimg}
              alt="payrollimg"
              className="md:mr-0 md:ml-auto border-8 rounded-lg border-accordion-border"
            />
          </div>

          <div className="md:col-span-6 col-span-12 md:col-start-7 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading
                  level={2}
                  spanText="CERTIFIED"
                  className="font-900 uppercase mb-0"
                ></Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  PAYROLL
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {payroll.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="md:col-span-6 col-span-12 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading
                  level={2}
                  spanText="AUTOMATIC"
                  className="font-900 uppercase mb-0"
                ></Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  predetermined
                  <br />
                  increases
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {automatic.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-start-7 col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image
              src={automaticimg}
              alt="automatic"
              className="md:mr-0 md:ml-auto border-8 rounded-lg border-accordion-border"
            />
          </div>
        </div>
      </div>

      <div className="container lg:pt-40  md:py-24 py-20 h-full items-center">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-start-1 md:col-span-6 col-span-12 md:text-right text-center relative">
            <Image
              src={fringeimg}
              alt="fringe"
              className="md:mr-0 md:ml-auto border-8 rounded-lg border-accordion-border"
            />
          </div>

          <div className="md:col-span-6 col-span-12 md:col-start-7 col-start-1">
            <div className=" grid grid-cols-7">
              <div className="md:text-left text-center col-span-7">
                <Heading level={2} spanText="FRINGE" className="font-900 uppercase mb-0">
                  BENEFIT
                </Heading>
              </div>
              <div className="md:col-start-2 col-start-1 col-span-12 md:text-left text-center">
                <Heading level={2} className="font-900 uppercase mb-12">
                  STATEMENT
                </Heading>
              </div>
              <div className="md:col-span-6 col-span-12 md:col-start-2 col-start-1">
                {fringe.map((data, index) => (
                  <ContentComponent
                    key={index}
                    title={data.title}
                    content={data.content}
                    className="text-white"
                    hiddenCTA={data.hiddenCTA}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-5">
          <div className="container md:pt-24 pt-20 md:pb-75 pb-10 md:mb-0 mb-7">
            <div className="grid grid-cols-12">
              <div className=" col-span-10">
                <Heading level={3} spanText="The" className="font-900 uppercase mb-0 text-black">
                  Process
                </Heading>
              </div>
              <div className="col-span-10 md:col-start-2 col-start-1">
                <Heading level={3} className="font-900 uppercase mb-0 text-black">
                  IS EASY
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
                {iconBoxes.map((box, index) => (
                  <IconBoxWithText
                    key={index}
                    number={index}
                    imageUrl={box.imageUrl}
                    title={box.title}
                    description={box.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
