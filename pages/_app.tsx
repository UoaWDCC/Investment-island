import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { readData } from '../firebase/data'

function MyApp({ Component, pageProps }: AppProps) {
  readData().then(data => console.log(data));
  return <Component {...pageProps} />
}

export default MyApp
