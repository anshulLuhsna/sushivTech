"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSearch } from '@fortawesome/free-solid-svg-icons';


function Register() {
  const [showPhoneLogin, setShowPhoneLogin] = useState(true)
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSwitchToEmail = () => {
    setShowPhoneLogin(false)
  }
  const handleSwitchToPhone = () => {
    setShowPhoneLogin(true)
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;

    

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }
    
    if (password!=confirmPassword){
      setError("Passwords do not match");
      return
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }

    console.log(email, password)
  }

  


  return (
    <>

     
     <div className="w-full h-64 bg-gradient-to-l bg-[#ED817B]">
      <div className="mx-32 p-8">
        <img className='mx-auto h-12 ' src="Screenshot 2024-02-27 101502.png" alt="" />
     <div className="font-bold text-4xl mt-8 text-white"><p>Register</p></div>
     <div className="text-3xl text-white"><p>Please register by phone number or email</p></div>
     <div className="text-3xl text-white"><p>If you forget your password, please contact customer service</p></div>

      </div>


     </div>

<div className="mx-32 p-8">
  <form onSubmit={handleSubmit}>


  <Label>Email</Label>
    <TextInput type='text' sizing={"sm"}  className='mt-2'></TextInput>

    <Label>Password</Label>
    <TextInput type='password' required sizing={"sm"} className='mt-2'></TextInput>
    <Label>Confirm Password</Label>
    <TextInput type='password' required sizing={"sm"} className='mt-2'></TextInput>
    <div className="mt-4">
    <Checkbox></Checkbox>
    <Label className='ml-2'>I agree to all terms and conditions</Label>

    </div>

  <p className="text-red-600 text-[16px] mb-4 mt-4">{error && error}</p>
    <div className="flex justify-center mx-auto items-center flex-col gap-4 mt-8">
     
      <Button type='submit' className='w-1/6 h-12'>Register</Button>
      <Link href={"/login"} className='w-1/6 h-12'><Button className='w-full h-full'>  Login with existing account</Button>
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




{/* Actual form */}
    {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
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
              Register
            </button>
           <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <button className='mt-8 bg-green-500 p-2 rounded-full'>

        <Link href={"/login"}>Login with existing account</Link>
          </button>

        </div>
      </div> */}



      {/* Figma code */}
      
    </>
    // <div className="w-full relative bg-lightsteelblue h-[84.938rem] overflow-hidden text-left text-[2.5rem] text-white font-inter">
  //  <div className="top-[0rem] left-[0rem] [background:linear-gradient(267.12deg,_rgba(253,_197,_181,_0.2),_rgba(255,_200,_184,_0.18)_56.92%,_rgba(253,_197,_181,_0)),_linear-gradient(180deg,_rgba(235,_119,_115,_0),_#eb7773)] w-full h-[16.688rem]" />
    
     
  )
}

export default Register