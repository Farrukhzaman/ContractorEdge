import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const AboutHero: Block = {
  slug: SLUGS.blocks.abouthero,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'spanText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'SubTitle',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'Content',
      type: 'richText',
      required: true,
    },

    {
      name: 'backGroundColor', // required
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: 'Black',
          value: 'black',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
    },
    {
      name: 'id',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
}
