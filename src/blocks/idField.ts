import type { Field } from 'payload/types'

export const idField: Field[] = [
  {
    name: 'sectionId',
    type: 'text',
    admin: {
      placeholder: 'Use for navigating to section within page',
    },
    required: false,
  },
]
