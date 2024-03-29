import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import seoPlugin from '@payloadcms/plugin-seo'
import { buildConfig } from 'payload/config'

import { AccordionItem } from './collections/Accordion'
import { FormField } from './collections/FormField'
import { IconBoxes } from './collections/Iconboxes'
import { ImageBoxes } from './collections/Imageboxes'
import { Link } from './collections/Links'
import { Marques } from './collections/Marques'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Teammembers } from './collections/TeamMembers'
import { getBlobAdapter } from './getPayload'
import { DemoForm } from './globals/DemoForm'
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [
    Pages,
    Media,
    Link,
    AccordionItem,
    ImageBoxes,
    IconBoxes,
    Marques,
    Teammembers,
    FormField,
  ],
  defaultDepth: 5,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  globals: [DemoForm],
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: getBlobAdapter(), // see docs for the adapter you want to use
        },
      },
    }),
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
    }),
  ],
  indexSortableFields: true,
})
