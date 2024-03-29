import type { GlobalConfig } from 'payload/types'

import { idField } from '../blocks/idField'
import { SLUGS } from '../slug'

export const DemoForm: GlobalConfig = {
  slug: SLUGS.globals.demoform,
  fields: [
    {
      name: 'spanText',
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
