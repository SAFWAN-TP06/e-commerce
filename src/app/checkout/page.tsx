import React from "react";
import Checkout from "./_components/Checkout";
import Billing from "./_components/Billing";



const page = () => {

  return (
    <div className="p-[7.649rem] grid grid-cols-2 gap-20 py-44">
      <div className="flex flex-col gap-6">
        <h1 className="text-[30px] font-bold">Billing Details</h1>
        <Checkout />
      </div>
        <Billing />
    </div>
  );
};

export default page;
