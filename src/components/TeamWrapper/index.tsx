'use client'
// components/TeamMemberCard.js
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Media } from '../../payload-types'
import TeamMemberCard from '../Team'
import Heading from '../ui/headings'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

// Initialize Swiper modules

interface Slide {
  Img: Media
  MemeberTitle: string
  Position: string
  altText?: string
  Title?: string
  spanText?: string
  subTitle?: string
  items?: any
}

const TeamMemberWrapper = ({
  Img,
  MemeberTitle,
  Position,
  altText,
  Title,
  spanText,
  subTitle,
  items,
}: Slide) => {
  const swiperOptions = {}
  return (
    <div className="bg-white md:pb-24 pb-20 px-5">
      <div className=" container">
        {Title ||
          (subTitle && (
            <div className="grid grid-cols-12">
              <div className="col-span-12 text-center">
                <Heading
                  level={3}
                  spanText={spanText}
                  className="font-900 uppercase mb-0 pb-8 leading-none"
                >
                  {Title}
                </Heading>
                <Heading
                  level={3}
                  className="font-900 uppercase mb-0 pb-24 text-black leading-none"
                >
                  {subTitle}
                </Heading>
              </div>
            </div>
          ))}
      </div>
      <div className=" container">
        <div className="md:px-[16%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay, A11y]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              // Add more breakpoints as needed
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide>
                <TeamMemberCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberWrapper
