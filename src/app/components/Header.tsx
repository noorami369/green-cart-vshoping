"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import instance from "@/api/axios";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  type RegisterTtpe = {
    email: string;
    name: string;
    password: string;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, data, isSuccess } = useMutation({
    mutationFn: async (newUser: RegisterTtpe) => {
      const { data } = await instance.post("/api/user/register", newUser);
      return data;
    },
    onSuccess: (data) => {
      // وقتی API موفق بود، پیام نمایش بده
      setMessage("Hello");
      setIsLoginOpen(false); // اگه بخوای فرم هم بسته بشه
    },
  });

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300">
        <img
          className="cursor-pointer w-38 h-[34.54px]"
          src="/logo.svg"
          alt=""
        />

        <div className="hidden md:flex items-center gap-8">
          <button className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80 leading-1.7">
            Seller Dashboard
          </button>

          <ul className="*:cursor-pointer flex gap-8 *:leading-1.5">
            <Link href="/">
              <li className="active">Home</li>
            </Link>
            <Link href="/pages/allProduct">
              <li>All Product</li>
            </Link>
          </ul>

          <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden">
            <input
              type="text"
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 leading-1.5"
              placeholder="Search products"
            />
            <img className="w-4 h-4" src="/search-icon.svg" alt="" />
          </div>

          <div className="relative cursor-pointer">
            <img className="w-6 opacity-80" src="/shopping-cart.svg" alt="" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4fbf8b] w-4.5 h-4.5 rounded-full">
              0
            </button>
          </div>

          <button
            onClick={() => {
              setAuthMode("login");
              setIsLoginOpen(true);
            }}
            className="cursor-pointer px-8 py-2 bg-[#4fbf8b] hover:bg-[#44AE7C] transition text-white rounded-full"
          >
            Login
          </button>
        </div>
      </div>

      {isLoginOpen && (
        <div
          onClick={() => setIsLoginOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-4 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 bg-white"
          >
            <h2 className="text-2xl font-medium m-auto">
              <span className="text-[#4fbf8b]">User</span>{" "}
              {authMode === "login" ? "Login" : "Signup"}
            </h2>

            {authMode === "signup" && (
              <div className="w-full">
                <p className="text-[14px]">Name</p>
                <input
                  className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary text-[14px]"
                  type="text"
                  placeholder="type here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="w-full">
              <p className="text-[14px]">Email</p>
              <input
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary text-[14px]"
                type="email"
                placeholder="type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full">
              <p className="text-[14px]">Password</p>
              <input
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary text-[14px]"
                type="password"
                placeholder="type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="*:text-[14px] flex gap-1 items-end">
              {authMode === "login"
                ? "Create an account?"
                : "Already have an account?"}
              <span
                onClick={() =>
                  setAuthMode(authMode === "login" ? "signup" : "login")
                }
                className="text-[#4fbf8b] cursor-pointer"
              >
                click here
              </span>
            </p>

            <button
              onClick={
                () => {
                  if (authMode === "signup") {
                    mutate({ name, email, password });
                  } else {
                    mutate({ email, password } as any);
                  }
                }
                // console.log(
                //   authMode === "login" ? "Login clicked" : "Signup clicked"
                // )
              }
              className="w-full mt-4 bg-[#4fbf8b] text-white py-2 px-4 rounded text-[14px] cursor-pointer"
            >
              {authMode === "login" ? "Login" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
