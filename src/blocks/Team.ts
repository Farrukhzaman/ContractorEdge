import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const Team: Block = {
  slug: SLUGS.blocks.TeamBlocks,
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'spanText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: SLUGS.collections.TeamMembers,
      required: true,
      hasMany: true,
      maxDepth: 10,
    },
  ],
}
