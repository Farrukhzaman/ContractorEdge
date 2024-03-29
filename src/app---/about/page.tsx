import { CMSWrapper } from '../../components/CMSWrapper'
import { getPayloadClient } from '../../getPayload'
import { SLUGS } from '../../slug'

import aboutbanner from '/public/images/about-banner.jpg'
import brittni from '/public/images/brittni.jpg'
import cari from '/public/images/cari.jpg'
import jane from '/public/images/jane.jpg'

const AboutContent = [
  {
    title:
      'Working with prevailing wage and Davis Bacon contractors over the last (almost) 10 years.',
    content:
      'we saw a big need in the market. We knew we needed to think about prevailing wage time tracking and wage determination differently to make our client’s lives easier and we saw that there wasn’t anything out there to solve the complexity of wage determination.',
    hiddenCTA: false,
    showApps: false,
  },
]

const stratigicContent = [
  {
    title:
      'We love helping our clients succeed but the busy work that was bogging them down and making their lives harder was going to require some new tools and strategies to solve.',
    content:
      'So we put our heads together and decided to create Contractor’s Edge. Contractor’s Edge software and app provide an easy-to-use, streamlined experience that takes the busy work and guesswork out of prevailing wage determination. And the best part is that our system works with our client’s existing software, benefits management, and payroll systems. We took all our skills, resources and experience and created a system that makes your life simple, easy, and hassle-free.',
    hiddenCTA: false,
    showApps: false,
  },
]

const AboutHerocontent = {
  title: 'maKE',
  span_text: 'Let’s',
  title_sub: 'YOUR LIFE EASIER',
  backgroundImage: aboutbanner,
}

const tags = [
  { text: 'Sharp', backgroundColor: '#000000', textColor: '#B78624' },
  { text: 'Time Management' },
  { text: 'Solutions', backgroundColor: '#B78624', textColor: '#ffffff' },
  { text: 'Streamline', borderColor: '#000000' },
  { text: 'Communication' },
  { text: 'Streamline', borderColor: '#000000' },
  { text: 'Wage Determination', backgroundColor: '#B78624', textColor: '#ffffff' },
  // Add more tag objects here
]

const teamMembers = [
  {
    id: 1,
    imageSrc: cari,
    title: 'Cari Honey',
    position: 'Founder & Managing Partner',
  },
  {
    id: 2,
    imageSrc: brittni,
    title: 'Brittni Engle',
    position: 'Founder & Managing Partner',
  },
  {
    id: 3,
    imageSrc: jane,
    title: 'JANE DOE',
    position: 'Chief Sales Officer',
  },
  // Add more team members here
]

export default async function About() {
  const payload = await getPayloadClient()
  const pageQuery = await payload.find({
    collection: SLUGS.collections.pages,
    where: {
      slug: {
        equals: 'about',
      },
    },
  })

  // console.log(pageQuery.docs[0])

  if (!pageQuery.docs[0]) {
    throw new Error('About page not found.')
  }
  return (
    <div>
      {pageQuery.docs[0]?.layout?.map(block => (
        <CMSWrapper key={`${block.id}`} {...block} pageProps={pageQuery.docs[0]} />
      ))}
    </div>
  )
}
