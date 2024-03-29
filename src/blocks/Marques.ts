import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const MarQues: Block = {
  slug: SLUGS.blocks.marQues,
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
      name: 'description',
      type: 'richText',
      required: false,
      localized: true,
    },
    {
      name: 'direction',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        description: 'Direction of Marque',
      },
    },
    {
      name: 'speed',
      type: 'number',
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: SLUGS.collections.marques,
      required: true,
      hasMany: true,
      maxDepth: 10,
    },
  ],
}
