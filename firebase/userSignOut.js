import {getAuth, signOut} from "firebase/auth";



export default async function userSignOut() {
    try {
        const auth = getAuth();
      signOut(auth)
    } catch (e) {
      console.log(e);
    }
  }