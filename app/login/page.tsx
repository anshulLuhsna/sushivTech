"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSearch } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  // useEffect(() => {
  //   if (sessionStatus === "authenticated") {
  //     router.replace("/dashboard");
  //   }
  // }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      router.replace("/dashboard")
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    // sessionStatus !== "authenticated" && (
      
<>

<div className="w-full h-64 bg-gradient-to-l bg-[#ED817B]">
      <div className="mx-32 p-8">
        <img className='mx-auto h-12 ' src="Screenshot 2024-02-27 101502.png" alt="" />
     <div className="font-bold text-4xl mt-8 text-white"><p>Login</p></div>
     <div className="text-3xl text-white mt-2"><p>Please Login by phone number or email</p></div>
     <div className="text-3xl text-white "><p>If you forget your password, please contact customer service</p></div>

      </div>


     </div>

<div className="mx-32 p-8">
  <form onSubmit={handleSubmit}>


  <Label>Email</Label>
    <TextInput type='text' sizing={"sm"}  className='mt-2'></TextInput>

    <Label>Password</Label>
    <TextInput type='password' required sizing={"sm"} className='mt-2'></TextInput>
    <div className="mt-4">
    <Checkbox></Checkbox>
    <Label className='ml-2'>Remember me?</Label>

    </div>

    <div className="flex justify-center mx-auto items-center flex-col gap-4 mt-8">
     
      <Button type='submit' className='w-1/6 h-12'>Login</Button>
      <Link href={"/register"} className='w-1/6 h-12'><Button className='w-full h-full'>Sign up</Button>
</Link>
    </div>

  </form>

    <div className="flex mt-16 justify-center mx-auto items-center gap-12">

      <div className="flex flex-col gap-4">
      <FontAwesomeIcon fontSize={"100px"} icon={faEnvelope}></FontAwesomeIcon>
      <div className="mx-8">  Customer support</div>
      </div>
      <div className="flex flex-col gap-4">
      <FontAwesomeIcon fontSize={"100px"} icon={faLock}></FontAwesomeIcon>
      <div className="mx-8"> Forgot password</div>
      </div>


    </div>

</div>


{/* Actual form
    <div className="w-full relative bg-[#EBECF6] h-[84.938rem] overflow-hidden text-left text-[2.5rem] text-white font-inter">

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Sign In
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            onClick={() => {
              signIn("github");
            }}
          >
            Sign In with Github
          </button>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/register"
          >
            Register Here
          </Link>
        </div>
      </div>
      </div> */}
</>



    )
  // );
};

export default Login;