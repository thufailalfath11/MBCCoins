import Link from "next/link";
import Image from "next/image"
import React, { useState,useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEnvelope,
  FaGithub,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { TitleLogo } from "./common/Title";

function LoginPage() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp, signInWithFacebook,signInWithGoogle, signInWithGitHub } = useAuth();
  const whiteBoxRef = useRef(null);
  const greenBoxRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  useEffect(() => {
    if (whiteBoxRef.current && greenBoxRef.current) {
      const whiteBoxHeight = whiteBoxRef.current.clientHeight;
      greenBoxRef.current.style.height = `${whiteBoxHeight}px`;
    }
  }, []);

  const handleFacebookLogin = () => {
    signInWithFacebook();
  };

  return (
    <div className="bglogin">
    <div className="flex flex-col items-center justify-center min-h-screen py-2 " >
       
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center"
      >
        <div className="bg-white rounded-2xl  shadow-2xl flex flex-col md:flex-row w-full max-w-4xl max-h-screen">
          <div className="w-full md:w-3/5 p-5"  ref={whiteBoxRef}>
            <div className="text-left font-bold text-black-500 " >
              <TitleLogo caption="Coins" title="MBC" className="logomin text-black" />
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                sign In sections
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  onClick={handleFacebookLogin}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 "
                >
                  <FaFacebookF className="text-sm text-black" />
                </a>
                <a
                   onClick={signInWithGitHub}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGithub className="text-sm text-black" />
                </a>
                <a
                  onClick={signInWithGoogle}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm text-black" />
                </a>
              </div>
              <p className="text-gray-400 my-3"> or use your email account</p>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="contohtarmidi@gmail.com"
                    className="bg-gray-100 outline-none text-sm flex-1 text-black"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <h7>Di isi dulu bro....</h7>}
                </div>
              </div>
              <div className="flex flex-col items-center mb-3 ">
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="contohPasword123"
                    className="bg-gray-100 outline-none text-sm flex-1 text-black"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <h7>Di isi dulu bro....</h7>}
                </div>
                <div className="flex justify-between w-full md:w-64 mb-10 ">
                  <label className="flex items-center text-xs text-black">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                  <button
                    className="text-xs text-black "
                    onClick={() => setLogin(true)}
                  >
                    Forgot Password?
                  </button>
                </div>
                <button
                  className="border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white "
                  type="submit"
                  onClick={() => setLogin(true)}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-6 md:py-36 px-4 md:px-12 " ref={greenBoxRef}>
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-20 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information an start journey with us
            </p>
            <Link
              href="/"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
              type="submit"
              onClick={() => setLogin(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
