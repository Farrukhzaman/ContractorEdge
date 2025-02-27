/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    media: Media;
    links: Link;
    users: User;
  };
  globals: {};
}
export interface Page {
  id: string;
  title: string;
  richText?: {
    [k: string]: unknown;
  }[];
  slug?: string;
  layout?: {
    herotitle: string;
    title_sub?: string;
    span_text?: string;
    description?: {
      [k: string]: unknown;
    }[];
    image: string | Media;
    button?: string | Link;
    id?: string;
    blockName?: string;
    blockType: 'hero';
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    background?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Link {
  id: string;
  label: string;
  identifier?: string;
  url: string;
  target?: 'openNewTab' | 'openSameTab';
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
