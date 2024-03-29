import Image from 'next/image'

import { imageLoader } from '../ImageLoader'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

interface IconBoxProps {
  number: number
  imageUrl: any
  boxTitle: string
  description: string
}
const IconBoxWithText = ({ number, imageUrl, boxTitle, description }: IconBoxProps) => {
  return (
    <div className="md:p-0 pl-12">
      {number && (
        <span className="bg-white md:w-10 w-8 md:h-10 h-7 border rounded-full flex justify-center items-center border-black text-black z-10 md:ml-0 -ml-12 relative md:top-0 top-[45px]">
          {number}
        </span>
      )}
      <div className="bg-strong-orange rounded-tl-lg flex justify-center items-center w-16 h-16 md:my-8 mb-6">
        {imageUrl && (
          <Image
            src={imageUrl.url}
            loader={imageLoader}
            alt={imageUrl.alt}
            className="mx-auto"
            width={imageUrl.width}
            height={imageUrl.height}
          />
        )}
      </div>
      {boxTitle && (
        <Heading level={6} className="uppercase font-900 leading-none pb-4 mb-0 text-black">
          {boxTitle}
        </Heading>
      )}
      {description && <RichText content={description} className={`p-0 m-0 text-base text-black`} />}
    </div>
  )
}

export default IconBoxWithText
