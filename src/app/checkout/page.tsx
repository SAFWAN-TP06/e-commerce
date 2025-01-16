import React from "react";

const page = () => {
  return (
    <div className="p-[7.649rem] grid grid-cols-2 gap-20 py-44">
      <div className="flex flex-col gap-6">
        <h1 className="text-[30px] font-bold">Billing Details</h1>
        <form className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-full gap-2">
              <div>First Name</div>
              <input
                className="border rounded-lg p-2"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div>Second Name</div>
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
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Email Address</div>
            <textarea
              className="border rounded-lg p-2 w-full"
              placeholder="Address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Pincode</div>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              placeholder="Enter Your Zip Code"
            />
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
