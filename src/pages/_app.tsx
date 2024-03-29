import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../app.scss'
import '../globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { meta } = pageProps.page || {}
  const { title, description, url, metaImage } = meta || {}
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>{title || 'MyContractorEdge'}</title>
        <meta
          name="description"
          content={
            description ||
            'Contractors Edge simplifies Prevailing Wage compliance by offering software that saves government contractors time and money by providing accurate wage determinations & properly allocating fringe benefits.'
          }
        />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={url || ''} />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
