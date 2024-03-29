import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const fullWidthImageblock: Block = {
  slug: SLUGS.blocks.fullwidthimage,
  fields: [
    {
      name: 'img',
      label: 'Image',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: true,
    },
    {
      name: 'paddingTop',
      label: 'Top Padding',
      type: 'checkbox',
    },
    {
      name: 'paddingBottom',
      label: 'Bottom Padding',
      type: 'checkbox',
    },
  ],
}
