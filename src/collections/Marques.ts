import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const Marques: CollectionConfig = {
  slug: SLUGS.collections.marques,
  admin: { useAsTitle: 'text' },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'borderColor',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'textColor',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
