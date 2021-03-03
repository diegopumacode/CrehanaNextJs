import '../styles/globals.css'
import NextNProgress from '../utils/progressbar'

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress
      color="#4B22F4"
      height="5"
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
