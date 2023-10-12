import { auth , GoogleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword ,signInWithPopup , signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.photoURL)

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };
  const signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };
  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sing In</button>
      <button onClick={signInWithGoogle}> Sing In With Google</button>
      <button onClick={signout}> LOG OUT</button>
    </div>
  );
};
