import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const Hero: Block = {
  slug: SLUGS.blocks.hero,
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'titleSub',
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
      name: 'Description',
      type: 'richText',
      label: 'description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: true,
    },
    {
      name: 'button',
      type: 'relationship',
      relationTo: SLUGS.collections.link,
      hasMany: false,
    },
  ],
}
