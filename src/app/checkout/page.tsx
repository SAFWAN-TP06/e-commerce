"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formschema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z]/, "Start with caps..."),
  email: z.string().email("Email is required"),
  phone: z
    .string()
    .nonempty({ message: "mobile number is required" })
    .regex(/^|d+$/, { message: "mobile number must certain digits" })
    .length(10, "Must Certain 10 Characters"),
  pincode: z.string().regex(/^[1-9]\d{2}\s?|d{3}$/, { message: "Not Correct" }),
  address: z.string().nonempty({ message: "Address is Required" }),
});
type Tcheck = z.infer<typeof formschema>;

const page = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Tcheck>({
    resolver: zodResolver(formschema),
  });
  const onsubmit = async (data: Tcheck) => {
    reset();
  };

  return (
    <div className="p-[7.649rem] grid grid-cols-2 gap-20 py-44">
      <div className="flex flex-col gap-6">
        <h1 className="text-[30px] font-bold">Billing Details</h1>
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-full gap-2">
              <div>First Name</div>
              <input
                className="border rounded-lg p-2"
                {...register("name")}
                type="text"
                placeholder="First Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-2">
              <div>Last Name</div>
              <input
                className="border rounded-lg p-2"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Phone</div>
            <input
              className="border rounded-lg p-2 w-full"
              {...register("phone")}
              type="text"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div>Email Address</div>
            <textarea
              className="border rounded-lg p-2 w-full"
              {...register("email")}
              placeholder="Address"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div>Pincode</div>
            <input
              className="border rounded-lg p-2 w-full"
              {...register("pincode")}
              type="text"
              placeholder="Enter Your Zip Code"
            />
            {errors.pincode && (
              <p className="text-red-500 mt-1">{errors.pincode.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div>Country / Region</div>
            <select className="border rounded-lg p-2 w-full">
              <option value="">India</option>
              <option value="">United States Of America</option>
              <option value="">UK</option>
              <option value="">Dubai</option>
              <option value="">Japan</option>
            </select>
          </div>
          <div className="">
            <button className="bg-blue-500 text-white w-full rounded-xl p-2">
              Complete Order
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[1.5rem] pb-2">Product</div>
          <div>Shipping</div>
          <div>Subtotal</div>
          <div>Total</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[1.5rem] pb-2">Subtotal</div>
          <div className="text-right">100</div>
          <div className="text-right">50</div>
          <div className="text-right">0</div>
        </div>
      </div>
    </div>
  );
};

export default page;
