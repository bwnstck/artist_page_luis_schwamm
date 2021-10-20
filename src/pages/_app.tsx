import 'normalize.css'
import { AppProps } from 'next/app'
import GlobalStyle from '../../public/styles/global'

// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
