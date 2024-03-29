import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

const buildS3Url = (filename: string | unknown): string =>
  `${process.env.PAYLOAD_PUBLIC_AZURE_STORAGE_ACCOUNT_BASEURL}/${process.env.PAYLOAD_PUBLIC_AZURE_STORAGE_CONTAINER_NAME}/${filename}`

export const Media: CollectionConfig = {
  slug: SLUGS.collections.media,
  access: { read: () => true },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'background',
        width: 1920,
        height: 1125,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) => buildS3Url(doc.filename),
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
      required: false,
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [({ data: doc }) => buildS3Url(doc?.filename)],
      },
    },
  ],
}

export default Media
