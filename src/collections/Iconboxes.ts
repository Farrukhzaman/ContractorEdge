import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const IconBoxes: CollectionConfig = {
  slug: SLUGS.collections.iconBoxes,
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'imageUrl', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'boxTitle',
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
