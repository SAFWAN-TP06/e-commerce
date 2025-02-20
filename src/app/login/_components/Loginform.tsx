"use client";
import React, { useState } from "react";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { frontEndHome } from "@/api/Api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const loginsceheme = z.object({
  email: z.string().email("Email is Required"),
  password: z
    .string()
    .min(8, "minimum 8 characters")
    .max(15, "maximum 15 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
type Tloginscheme = z.infer<typeof loginsceheme>;

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tloginscheme>({
    resolver: zodResolver(loginsceheme),
  });

  const [show, setShow] = useState(false);

  const router = useRouter();

  const onsubmit = async (data: Tloginscheme) => {
    try {
      const response = await frontEndHome.loginApi(data);
      if (response.data.success) {
        window.localStorage.setItem("accessToken", response.data.accessToken)
        window.localStorage.setItem("userdata", JSON.stringify(response.data.userData))
        Cookies.set('accessToken', response.data.accessToken)
        toast.success(response.data.message);
        router.push("/")
        router.refresh()
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errors: any) {
      console.log(errors)
      toast.error(errors.response.data)
    }
    console.log("submitted data:", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col items-center relative bg-white p-5 md:p-8 rounded-lg px-4"
      >
        <h1 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-blue-700 lg:pt-5 lg:pb-2">
          Login to your account
        </h1>
        <h3 className="pt-3">Please enter your details!</h3>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 pt-5 w-full">
          <input
            {...register("email")}
            className="border border-gray-500 p-1 md:p-[0.6rem] rounded-xl"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
          <div className="w-full relative">
            <input
              {...register("password")}
              className="border border-gray-500 p-1 md:p-[0.6rem] rounded-xl w-full"
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-700">{errors.password.message}</p>
            )}

            {show ? (
              <Openeye
                className="absolute h-4 top-2 md:top-4 right-3 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <Closeeye
                className="absolute h-4 top-2 md:top-4 right-3 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <button className="bg-yellow-500 p-1 md:p-2 lg:p-3 rounded-xl">
            Log in
          </button>
          <div className="flex gap-2 pb-5 lg:text-center">
            <div>Don&apos;t have an account?</div>
            <Link href="/signup" className="text-violet-500">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
