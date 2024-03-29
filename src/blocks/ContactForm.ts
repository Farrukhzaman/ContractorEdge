import type { Block } from 'payload/types'

import { SLUGS } from '../slug'
import { idField } from './idField'

export const ContactForm: Block = {
  slug: SLUGS.blocks.contactForm,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
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

    ...idField,
  ],
}
