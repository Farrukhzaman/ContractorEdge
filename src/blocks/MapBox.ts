import type { Block } from 'payload/types'

import { SLUGS } from '../slug'
function isValidURL(url: string): boolean {
  // Regular expression pattern for a basic URL validation
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlPattern.test(url)
}
export const MapBox: Block = {
  slug: SLUGS.blocks.mapbox,
  fields: [
    {
      name: 'src',
      type: 'text',
      required: true,
      localized: true,
      validate: value => {
        if (!isValidURL(value)) {
          return 'Please enter a valid URL'
        }
        return true
      },
    },
    {
      name: 'width',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'height',
      type: 'text',
      required: false,
      localized: true,
    },

    {
      name: 'sectionTopBottomPadding', // required
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Medium',
          value: 'Medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'sectionId',
      type: 'text',
      required: false,
    },
  ],
}
