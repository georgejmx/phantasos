"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { createUser } from "@/lib/calls";
import TextInput from "./TextInput";

export default function LoginMenu(): JSX.Element {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const emailUpdateHandler = (value: string) => setEmail(value);
  const passwordUpdateHandler = (value: string) => setPassword(value);

  function submitHandler() {
    if (!email || !password) {
      setErrorMsg("Please enter an email and password");
      return;
    }

    createUser(email, password)
      .then((response) => {
        if (response.ok) {
          router.push("/api/auth/signin");
        } else {
          setErrorMsg(response.message);
        }
      })
      .catch((error: unknown) => {
        console.error(error);
        setErrorMsg("Client error when creating user");
      });
  }

  return (
    <>
      <div className="flex flex-row items-center p-6">
        <button
          className="mr-10 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
          onClick={() => signIn()}
        >
          Sign in
        </button>
        <button
          className="mr-10 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
          onClick={() => setIsSignup(true)}
        >
          Sign up
        </button>
      </div>
      {isSignup && (
        <div className="mx-2 py-4 flex flex-col items-center">
          <TextInput label={"Email"} onUpdate={emailUpdateHandler} isMasked={false} />
          <TextInput label={"Password"} onUpdate={passwordUpdateHandler} isMasked={true} />
          <button
            className="m-2 rounded border-2 border-purple-500 p-2 text-purple-500 bg-black align-middle"
            onClick={submitHandler}
          >
            Register
          </button>
          <p className="text-purple-300 p-2 text-center italic">
            Upon registration, you will be redirected to the sign in page
          </p>
          {errorMsg && <p className="text-cyan-500 italic p-2 my-4">{errorMsg}</p>}
        </div>
      )}
    </>
  );
}
