import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/dist/types'
import dotenv from 'dotenv'
import path from 'path'
import type { Payload } from 'payload'
import payload from 'payload'
import type { InitOptions } from 'payload/config'

import { seed as seedData } from './seed'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

interface Args {
  initOptions?: Partial<InitOptions>
  seed?: boolean
}

export const getBlobAdapter = (): Adapter => {
  return azureBlobStorageAdapter({
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING || '',
    containerName: process.env.PAYLOAD_PUBLIC_AZURE_STORAGE_CONTAINER_NAME || '',
    allowContainerCreate: process.env.AZURE_STORAGE_ALLOW_CONTAINER_CREATE === 'true',
    baseURL: process.env.PAYLOAD_PUBLIC_AZURE_STORAGE_ACCOUNT_BASEURL || '',
  })
}

export const getPayloadClient = async ({ initOptions, seed }: Args = {}): Promise<Payload> => {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is missing')
  }

  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET environment variable is missing')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      mongoURL: process.env.MONGODB_URI,
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    })
  }

  try {
    process.env.PAYLOAD_DROP_DATABASE = seed ? 'true' : 'false'
    cached.client = await cached.promise

    if (seed) {
      await seedData(payload)
    }
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
