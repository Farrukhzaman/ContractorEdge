import type { CollectionConfig } from 'payload/types'

import { AboutHero } from '../blocks/AboutHero'
import { Accordion } from '../blocks/Accordion'
import { ContactForm } from '../blocks/ContactForm'
import { ContactHero } from '../blocks/ContactHero'
import { ContentBox } from '../blocks/ContentBox'
import { ContentImageBox } from '../blocks/ContentImageBox'
import { ContentMultiImagesBox } from '../blocks/ContentMultiImagesBox'
import { FetchContent } from '../blocks/DataFetch'
import { fullWidthImageblock } from '../blocks/FullWidthImage'
import { Hero } from '../blocks/Hero'
import { IconBox } from '../blocks/IconBox'
import { ImageBox } from '../blocks/ImageBox'
import { innerBannerBox } from '../blocks/InnerBannerBox'
import { MapBox } from '../blocks/MapBox'
import { MarQues } from '../blocks/Marques'
import { OurStory } from '../blocks/OurStory'
import { Team } from '../blocks/Team'
import { SLUGS } from '../slug'
import formatSlug from '../utilities/formatSlug'

export const Pages: CollectionConfig = {
  slug: SLUGS.collections.pages,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
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
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      // minRows: 1,
      // maxRows: 20,
      blocks: [
        // required
        Hero,
        Accordion,
        ImageBox,
        ContentImageBox,
        ContentMultiImagesBox,
        IconBox,
        innerBannerBox,
        AboutHero,
        fullWidthImageblock,
        MarQues,
        Team,
        ContactHero,
        ContactForm,
        OurStory,
        ContentBox,
        FetchContent,
        MapBox,
      ],
    },
  ],
}

export default Pages
