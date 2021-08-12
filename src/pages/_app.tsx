import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Rafael - Front-end Dev</title>
        <meta
          name="description"
          content="I am a Front-end developer based in Brazil."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dellaquila.dev/" />
        <meta property="og:title" content="Rafael - Front-end Dev" />
        <meta
          property="og:description"
          content="I am a developer and UI designer based in Brazil."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/dellaquila-cbdfe.appspot.com/o/thumbnail_site.jpg?alt=media&token=ccc215bc-1ac9-4eee-8629-9fccc59936c0"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dellaquila.dev/" />
        <meta property="twitter:title" content="Rafael - Front-end Dev" />
        <meta
          property="twitter:description"
          content="I am a developer and UI designer based in Brazil."
        />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/dellaquila-cbdfe.appspot.com/o/thumbnail_site.jpg?alt=media&token=ccc215bc-1ac9-4eee-8629-9fccc59936c0"
        />
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/manifest.json"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://firebasestorage.googleapis.com/v0/b/dellaquila-cbdfe.appspot.com/o/favicon.svg?alt=media&token=573d2ac9-1090-4475-89e2-36372e22f16c"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
