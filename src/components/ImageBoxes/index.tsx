import Image from 'next/image'

import { imageLoader } from '../ImageLoader'
import Heading from '../ui/headings'
import { RichText } from '../ui/RichText'

interface ImageBoxProps {
  imageUrl: any
  title: string
  description: string
}
const ImageBoxWithText = ({ imageUrl, title, description }: ImageBoxProps) => {
  return (
    <div className="lg:p-10 p-6 border border-border-color rounded-tl-3xl">
      {imageUrl && (
        <Image
          src={imageUrl.url}
          loader={imageLoader}
          alt={title}
          className="mx-auto"
          width={imageUrl.width}
          height={imageUrl.height}
        />
      )}
      {title && (
        <Heading level={6} className="uppercase font-900 leading-none py-6 m-0">
          {title}
        </Heading>
      )}
      {description && (
        <div className="p-0 m-0 md:text-base text-1sm">
          <RichText
            content={description}
            className={`text-gray-main font-general-regular fade-up`}
          />
        </div>
      )}
    </div>
  )
}
export default ImageBoxWithText
