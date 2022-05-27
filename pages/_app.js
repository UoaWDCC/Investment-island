import "../styles/globals.css";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import initFirebase from "../firebase/clientApp";

export default function MyApp({ Component, pageProps }) {
  initFirebase();
  return <Component {...pageProps} />;
}
