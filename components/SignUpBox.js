import { FirebaseError } from "firebase/app";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import createUser, { createFacebookUser, createUserGoogle } from "../firebase/authCreateUser";
import { useState } from "react";

export default function SignUpBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    createUser(email, password);
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
      <button onClick={handleSignIn}>Sign Up</button>
      <br />
      <button
        onClick={() => {
          createUserGoogle();
        }}
      >
        Sign Up With Google
      </button>
      <br>
      </br>
      <button
        onClick={() => {
          createFacebookUser();
        }}
      >
        Sign Up With Facebook
      </button>
    </div>
  );
}
