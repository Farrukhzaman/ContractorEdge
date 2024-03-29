import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const OurStory: Block = {
  slug: SLUGS.blocks.ourstory,
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
      name: 'spanSubText',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      admin: {
        elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'link', 'blockquote', 'ul', 'ol', 'upload'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
        link: {
          // Inject your own fields into the Link element
          fields: [
            {
              name: 'rel',
              label: 'Rel Attribute',
              type: 'select',
              hasMany: true,
              options: ['noopener', 'noreferrer', 'nofollow'],
            },
          ],
        },
        upload: {
          collections: {
            media: {
              fields: [
                {
                  name: 'imageUrl', // required
                  type: 'upload', // required
                  relationTo: 'media', // required
                  required: true,
                },
                // Add more fields as needed
              ],
            },
          },
        },
      },
    },
    {
      name: 'quote',
      type: 'richText',
      label: 'Quote',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: SLUGS.collections.media, // Possible issue here
      required: true,
    },
    {
      name: 'imagePosition', // required
      type: 'select', // required
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
