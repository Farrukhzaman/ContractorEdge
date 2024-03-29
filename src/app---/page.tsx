import { CMSWrapper } from '../components/CMSWrapper'
import { getPayloadClient } from '../getPayload'
import { SLUGS } from '../slug'

import easytouse from '/public/images/easy-to-use.png'
import screen1 from '/public/images/screen1.png'
import streamlining from '/public/images/streamlining.png'
import timetracking from '/public/images/time-tracking.png'
import golive from '/public/svg/go-live.svg'
import implementation from '/public/svg/implementation.svg'
import signups from '/public/svg/signup.svg'
import training from '/public/svg/training.svg'

const Herocontent = {
  herotitle: 'the future of',
  span_text: 'Experience',
  title_sub: 'Prevailing Wage compliance',
  description:
    'Software that saves you time and makes your life easier. For government contractors who want to obtain accurate wage determinations and properly allocate fringe benefits.',
}

const imageBoxes = [
  {
    imageUrl: streamlining,
    title: 'Streamlining',
    description:
      'Streamlining prevailing wage compliance tasks, saving time and minimizing mistakes with user-friendly software.',
  },
  {
    imageUrl: timetracking,
    title: 'Time Tracking',
    description:
      'Mobile time tracking for prevailing wage compliance, simplifying recording and reporting for workers and supervisors.',
  },
  {
    imageUrl: easytouse,
    title: 'Easy to use',
    description:
      'Time-saving automation ensures accurate prevailing wage compliance, freeing contractors to focus on core operations with peace of mind.',
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

const streamLineContent = [
  {
    title: 'The best part: Our software plays nicely with your existing systems.',
    content:
      'Companies who try to streamline their fringe benefits by paying them in cash can inadvertently cost themselves thousands of dollars in overpayments. At Contractors Edge, we know fringe benefits can be complicated and take time and effort that might be better allocated elsewhere.',
    hiddenCTA: false,
    showApps: false,
  },
  {
    title: 'Fringe benefits allocation made easy.',
    content:
      'Contractor’s Edge software combines fringe benefit allocation, time tracking, certified payroll reporting, and fringe benefit reporting that is customized for your company’s benefits. Errors, fringe overpayments, and inaccuracies are expensive in both time and money. With Contractors Edge, you can make the whole process simple. Our software automates many of the manual processes that suck time and effort and saves you money in taxes, workers’ comp. and general liability.',
    hiddenCTA: true,
    showApps: false,
    color: '#000',
  },
]

const saveContent = [
  {
    title:
      'Automated prevailing wage rate calculation, time tracking on the go with our mobile app, and versatile reporting.',
    content:
      'Contractor’s Edge saves HR teams time and headaches by automating their processes, making compliance simple and streamlined, and eliminating the need for so much manual input. Certified payroll is a time suck and many solutions are so rigid you have to abandon long relationships and healthy compensation plans in order to implement them.',
    hiddenCTA: false,
    showApps: false,
  },
  {
    title: 'Save time and headaches.',
    content:
      'With us you get full compliance, a mobile app for your contractors in the field, and the kind of back-end support you’d expect from one of the most experienced companies in the field of Prevailing Wage.',
    hiddenCTA: false,
    color: '#000',
    showApps: true,
  },
]

const faqs = [
  {
    key: 0,
    title: 'Mobile Time Tracking',
    description:
      'Submit your required Fringe Benefit Statements with peace of mind, knowing that your fringe allocation is correct and matches your Certified Payroll Reports perfectly.',
    image: screen1,
  },
  {
    key: 1,
    title: 'wage determination rates',
    description:
      'Submit your required Fringe Benefit Statements with peace of mind, knowing that your fringe allocation is correct and matches your Certified Payroll Reports perfectly.',
    image: screen1,
  },
  {
    key: 2,
    title: 'Fringe Benefit Statement',
    description:
      'Submit your required Fringe Benefit Statements with peace of mind, knowing that your fringe allocation is correct and matches your Certified Payroll Reports perfectly.',
    image: screen1,
  },
  {
    key: 3,
    title: 'Certified Payroll',
    description:
      'Submit your required Fringe Benefit Statements with peace of mind, knowing that your fringe allocation is correct and matches your Certified Payroll Reports perfectly.',
    image: screen1,
  },
]

export default async function Home(props) {
  //eslint-disable-next-line
  console.log('props', props)
  const payload = await getPayloadClient()
  const pageQuery = await payload.find({
    collection: SLUGS.collections.pages,
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  // console.log(pageQuery.docs[0])

  if (!pageQuery.docs[0]) {
    throw new Error('Home page not found.')
  }

  return (
    <div>
      {pageQuery.docs[0]?.layout?.map(block => (
        <CMSWrapper key={`${block.id}`} {...block} pageProps={pageQuery.docs[0]} />
      ))}
    </div>
  )
}
