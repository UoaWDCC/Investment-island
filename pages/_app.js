import "../styles/globals.css";
import initFirebase from "../firebase/clientApp";

export default function MyApp({ Component, pageProps }) {
  initFirebase();
  return <Component {...pageProps} />;
}
