import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default async function userSignUp(email, password) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    console.log(e);
    console.log("Sign up failed");
    return false;
  }
}

export async function userSignIn(email, password) {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    console.log(e);
    console.log("Sign in failed");
    return false;
  }
}

export async function googleSignIn() {
  try {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function facebookSignIn() {
  try {
    const auth = getAuth();
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider);
  } catch (e) {
    console.log(e);
    return false;
  }
}
