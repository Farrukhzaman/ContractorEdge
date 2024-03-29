import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const ImageBoxes: CollectionConfig = {
  slug: SLUGS.collections.imageBoxes,
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'imageUrl', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      localized: true,
    },
  ],
}
