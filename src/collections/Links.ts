import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const Link: CollectionConfig = {
  slug: SLUGS.collections.link,
  admin: { useAsTitle: 'identifier' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Name (internal use only)',
      name: 'identifier',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'target',
      type: 'select',
      options: [
        { label: 'Open in new tab', value: 'openNewTab' },
        { label: 'Open in same tab', value: 'openSameTab' },
      ],
      defaultValue: 'openSameTab',
    },
  ],
}
