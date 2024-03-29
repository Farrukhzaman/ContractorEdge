import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const IconBox: Block = {
  slug: SLUGS.blocks.iconBox,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'spanTitle',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'spanSubTitle',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: SLUGS.collections.iconBoxes,
      required: true,
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: 'sectionId',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
}
