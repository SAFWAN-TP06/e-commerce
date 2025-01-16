"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Signupform from "./_components/Signupform";

const page = () => {
  
  return (
    <div className="pt-[]">
      <div className="relative h-screen flex items-center justify-center w-full">
        <Image className="object-cover" src="/images/djo2.jpg" alt="" fill />
        <Signupform />
      </div>
    </div>
  );
};

export default page;