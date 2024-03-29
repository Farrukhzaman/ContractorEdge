import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const Accordion: Block = {
  slug: SLUGS.blocks.accordion,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: SLUGS.collections.accordionItem,
      required: true,
      hasMany: true,
    },
  ],
}
