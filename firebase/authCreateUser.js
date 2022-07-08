import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export default async function createUser(email, password) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function createUserGoogle() {
  try {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function createFacebookUser() {
  try {
    const auth = getAuth();
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider);
  } catch (e) {
    console.log(e);
    return false;
  }
}
