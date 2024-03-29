import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const ContentMultiImagesBox: Block = {
  slug: SLUGS.blocks.contentmultiimagebox,
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
      name: 'spanSubText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: true,
      admin: {
        description: 'Main primary image',
      },
    },
    {
      name: 'imagePosition', // required
      type: 'select', // required
      label: 'Position for mail image',
      hasMany: false,
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
        description: 'The image position is for main image',
      },
    },
    {
      name: 'imageSecondary',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: true,
    },
    {
      name: 'imageThird',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: true,
    },
    {
      name: 'imageBorder', // required
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
      admin: {
        description: 'Image border apply only main image',
      },
    },
    {
      name: 'hiddenCTA',
      type: 'checkbox', // required
      label: 'Want to show CTAS',
      defaultValue: false,
    },
    {
      name: 'buttonOne',
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
      name: 'buttonTwo',
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
      name: 'showApps',
      type: 'checkbox', // required
      label: 'Want to show Apps Buttons',
      defaultValue: false,
    },
    {
      name: 'appleLink',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'googleLink',
      type: 'text',
      required: false,
      localized: true,
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
      name: 'backgroundImage',
      type: 'upload',
      relationTo: SLUGS.collections.media,
      required: false,
    },
    {
      name: 'sectionId',
      type: 'text',
      required: false,
    },
  ],
}
