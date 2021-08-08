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
        <meta name="description" content="My personal site!" />
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/manifest.json"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://firebasestorage.googleapis.com/v0/b/dellaquila-cbdfe.appspot.com/o/favicon.png?alt=media&token=9f6c9abb-cacc-4224-891d-68fb06297d28"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
