import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect
} from "firebase/auth";

export async function createUserGoogle() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const credentials = await signInWithPopup(auth, googleProvider);
}

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

export async function createFacebookUser() {
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();
  const credentials = signInWithPopup(auth, facebookProvider);

}

