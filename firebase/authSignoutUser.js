import { getAuth, signOut } from "firebase/auth";

export default async function userSignout() {
  try {
    const auth = getAuth();
    signOut(auth);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
