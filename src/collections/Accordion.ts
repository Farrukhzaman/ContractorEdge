import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const AccordionItem: CollectionConfig = {
  slug: SLUGS.collections.accordionItem,
  admin: { useAsTitle: 'title' },
  fields: [
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
    {
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'isBorder',
      type: 'checkbox',
      label: 'Border for Image',
      defaultValue: true,
    },
  ],
}
