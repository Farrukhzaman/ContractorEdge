import Image from 'next/image'

import { imageLoader } from '../ImageLoader'

interface Media {
  id: string
  alt?: string
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    background?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
  }
}

interface FullWidthImageProps {
  img: Media
  paddingTop?: boolean
  paddingBottom?: boolean
}

export default function FullWidthImagecomp({
  img,
  paddingTop,
  paddingBottom,
}: FullWidthImageProps) {
  const imgStyling = {
    height: `${img.height}px`,
  }
  const topPadding = paddingTop === true ? 'pt-52' : ''
  const bottomPadding = paddingBottom === true ? 'pt-20' : ''

  return (
    <div className={`relative w-full ${topPadding} ${bottomPadding}`}>
      {img?.url && (
        <Image
          src={img.url}
          loader={imageLoader}
          alt={img.alt || ''}
          width={img.width}
          height={img.height}
          className="w-full h-auto"
        />
      )}
    </div>
  )
}
