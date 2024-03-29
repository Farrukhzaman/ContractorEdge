import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const ContactHero: Block = {
  slug: SLUGS.blocks.ContactHero,
  fields: [
    {
      name: 'title',
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
      name: 'SubText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'email',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'location',
      type: 'textarea',
      required: false,
    },
    {
      name: 'formHeading',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'formAPIHook',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'formFields',
      type: 'relationship',
      relationTo: SLUGS.collections.formField,
      required: true,
      hasMany: true,
    },
  ],
}
