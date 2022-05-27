import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export function createUserGoogle() {
  const auth = getAuth();
}

export default async function createUser(email, password) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);

    return true;
  } catch (e) {
    console.log(e.code, e.message);
    console.log(e.stacktrace);
    console.log(e);
    return false;
  }
}
