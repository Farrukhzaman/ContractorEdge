import type { Block } from 'payload/types'

import { SLUGS } from '../slug'

export const ContentBox: Block = {
  slug: SLUGS.blocks.contentbox,
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
