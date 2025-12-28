"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import instance from "@/api/axios";

type RegisterType = {
  name?: string;
  email: string;
  password: string;
};

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>();

  const { mutate } = useMutation({
    mutationFn: async (newUser: RegisterType) => {
      const { data } = await instance.post("/api/user/register", newUser);
      return data;
    },
    onSuccess: () => {
      reset();
      setIsLoginOpen(false);
    },
  });

  const onSubmit = (data: RegisterType) => {
    if (authMode === "signup") {
      mutate(data);
    } else {
      mutate({ email: data.email, password: data.password });
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300">
        <img
          className="cursor-pointer w-38 h-[34.54px]"
          src="/logo.svg"
          alt=""
        />

        <div className="hidden md:flex items-center gap-8">
          <button className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80">
            Seller Dashboard
          </button>

          <ul className="flex gap-8">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/pages/allProduct">
              <li className="cursor-pointer">All Product</li>
            </Link>
          </ul>

          <button
            onClick={() => {
              setAuthMode("login");
              setIsLoginOpen(true);
            }}
            className="px-8 py-2 bg-[#4fbf8b] text-white rounded-full"
          >
            Login
          </button>
        </div>
      </div>

      {/* MODAL */}
      {isLoginOpen && (
        <div
          onClick={() => setIsLoginOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-4 p-8 py-12 min-w-80 rounded-lg bg-white"
          >
            <h2 className="text-2xl font-medium m-auto">
              <span className="text-[#4fbf8b]">User</span>{" "}
              {authMode === "login" ? "Login" : "Signup"}
            </h2>

            {/* NAME (SIGNUP ONLY) */}
            {authMode === "signup" && (
              <div className="w-full">
                <p className="text-[14px]">Name</p>
                <input
                  className={`border rounded w-full p-2 mt-1 text-[14px] ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  }`}
                  type="text"
                  placeholder="type here"
                  {...register("name", {
                    required: "Please fill out this field.",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}

            {/* EMAIL */}
            <div className="w-full">
              <p className="text-[14px]">Email</p>
              <input
                className={`border rounded w-full p-2 mt-1 text-[14px] ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                type="email"
                placeholder="type here"
                {...register("email", {
                  required: "Please fill out this field.",
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="w-full">
              <p className="text-[14px]">Password</p>
              <input
                className={`border rounded w-full p-2 mt-1 text-[14px] ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
                type="password"
                placeholder="type here"
                {...register("password", {
                  required: "Please fill out this field.",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* SWITCH MODE */}
            <p className="text-[14px] flex gap-1">
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

            {/* SUBMIT */}
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full mt-4 bg-[#4fbf8b] text-white py-2 rounded text-[14px]"
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
