import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const innerBannerBox: Block = {
  slug: SLUGS.blocks.innerbannerbox,
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: SLUGS.collections.media, // Possible issue here
      required: true,
    },
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
      name: 'titleSub',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },

    {
      name: 'hiddenCTA',
      type: 'checkbox', // required
      label: 'Want to show CTAS',
      defaultValue: false,
    },
    {
      name: 'buttonOneText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'buttonOneLink',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'buttonTwoText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'buttonTwoLink',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'sectionId',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
}
