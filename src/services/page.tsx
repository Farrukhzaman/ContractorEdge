import payload from 'payload'

// import { payloadService } from '../service'
import { SLUGS } from '../slug'

export const getPageData = async <T,>(data): Promise<T[]> => {
  // const payload = await payloadService()

  const pages = await payload.find({
    collection: SLUGS.collections.pages,
    limit: 0,
    // locale: data.locale,
    draft: data.preview,
    where: {
      slug: {
        equals: data.slug, // operator to use and value to compare against
      },
    },
    depth: 5,
  })

  return pages.docs[0]
}

export const getPostData = async <T,>(postType, pageName): Promise<T[]> => {
  // const payload = await payloadService()

  const pages = await payload.find({
    collection: postType,
    limit: 0,
    locale: 'en',
    where: {
      slug: {
        equals: pageName, // operator to use and value to compare against
      },
    },
    depth: 5,
  })

  return pages.docs[0]
}

export const getPageSlugs = async <T,>({ locales }): Promise<T[]> => {
  // const payload = await payloadService()
  const pages = await payload.find({
    collection: SLUGS.collections.pages,
    limit: 0,
  })
  const paths: any[] = []
  pages.docs.forEach(doc => {
    locales.forEach(locale => {
      paths.push({ params: { slug: doc.slug }, locale: locale })
    })
  })

  return paths
}

export const findGlobalBySlug = async <T,>(slug, locale): Promise<T[]> => {
  // const payload = await payloadService()
  return payload.findGlobal({
    slug,
    depth: 4,
    locale: locale,
  })
}
