'use client'
// components/TeamMemberCard.js
import Image from 'next/image'

// Import Swiper React components
import { Media } from '../../payload-types'
import { imageLoader } from '../ImageLoader'
import Heading from '../ui/headings'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface Slide {
  Img: Media
  MemeberTitle: string
  Position: string
  altText?: string
}

const TeamMemberCard = ({ Img, MemeberTitle, Position, altText }) => {
  return (
    <div className="md:grayscale hover:grayscale-0">
      {Img?.url && (
        <Image
          src={Img.url}
          loader={imageLoader}
          alt={Img.altText}
          width={Img.width}
          height={Img.height}
          className="rounded-tl-3xl mx-auto mb-6"
        />
      )}
      <Heading level={6} className="font-900 uppercase mb-0 pb-3 text-black">
        {MemeberTitle}
      </Heading>
      <p className="text-black text-base">{Position}</p>
    </div>
  )
}

export default TeamMemberCard
