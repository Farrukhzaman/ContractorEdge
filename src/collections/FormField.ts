import type { CollectionConfig } from 'payload/types'

import { SLUGS } from '../slug'

export const FormField: CollectionConfig = {
  slug: SLUGS.collections.formField,
  admin: { useAsTitle: 'label' },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'fieldType', // required
      type: 'select', // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      defaultValue: 'text',
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'TextArea',
          value: 'textarea',
        },
        {
          label: 'Checkbox', // Add Checkbox field option
          value: 'checkbox',
        },
        {
          label: 'Radio Button', // Add Radio Button field option
          value: 'radio',
        },
        {
          label: 'SelectBox', // Add Radio Button field option
          value: 'select',
        },
      ],
    },
    {
      name: 'required',
      type: 'checkbox',
      label: 'Field required',
      defaultValue: false,
    },
    {
      name: 'checkboxOptions', // Add Checkbox options field
      type: 'blocks',
      // Specify the block configuration for checkboxes
      blocks: [
        {
          slug: 'checkboxOption',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'radioOptions', // Add Radio Button options field
      type: 'blocks',
      // Specify the block configuration for radio buttons
      blocks: [
        {
          slug: 'radioOption',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'selectOptions', // Name for the select box options
      type: 'blocks',
      blocks: [
        {
          slug: 'selectOption', // Specify the block configuration for select options
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
