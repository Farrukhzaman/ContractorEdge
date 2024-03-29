import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const Teammembers: CollectionConfig = {
  slug: SLUGS.collections.TeamMembers,
  admin: { useAsTitle: 'MemeberTitle' },
  fields: [
    {
      name: 'Img', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'MemeberTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'Position',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'altText',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
}
