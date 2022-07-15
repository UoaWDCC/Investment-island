import {
  userSignUp,
  userSignIn,
  googleSignIn,
  facebookSignIn,
} from "../firebase/userSignIn";
import userSignOut from "../firebase/userSignOut";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function SignUpBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const isSignedIn = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });

    return (
      <div>{userId ? `User ${userId} is signed in ` : "not signed in"}</div>
    );
  };

  const handleSignUp = () => {
    userSignUp(email, password);
    setEmail("");
    setPassword("");
  };

  const handleSignIn = () => {
    userSignIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button
        onClick={() => {
          googleSignIn();
        }}
      >
        Sign In With Google
      </button>
      <button
        onClick={() => {
          facebookSignIn();
        }}
      >
        Sign In With Facebook
      </button>
      <button
        onClick={() => {
          userSignOut();
        }}
      >
        Log out
      </button>
      {isSignedIn()}
    </div>
  );
}
