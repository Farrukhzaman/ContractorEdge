import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export const Meta = props => {
  const getUrl = () => {
    const origin =
      typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

    return `${origin}${router.asPath}`
  }
  const router = useRouter()
  const seo = {
    // title: props.title || 'Contractor Edge',
    // description: props.description || 'Contractor Edge',
    // canonical: process.env.SITE_URL_WWW,
    // openGraph: {
    //   type: props.type || 'webpage',
    //   title: props.title || 'Contractor Edge',
    //   description: props.description || 'Contractor Edge',
    //   locale: router.locale,
    //   images: [],
    //   url: getUrl(),
    //   siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    // },
  }
  if (props.image) {
    // seo.openGraph.images.push({
    //   ...props.image,
    //   alt: props.image.altText || '',
    // })
  }

  //   if (props.type === 'article') {
  //     seo.openGraph.article = {
  //       ...props.article,
  //     }
  //     if (props.featuredImage) {
  //       seo.openGraph.images.push({
  //         ...props.featuredImage,
  //         alt: props.featuredImage.altText,
  //       })
  //     }
  //   }

  return <NextSeo {...seo} {...props} />
}
