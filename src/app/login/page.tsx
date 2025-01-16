"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Loginform from "./_components/Loginform";

const page = () => {
  
  return (
    <div className="pt-[]">
      <div className="relative h-screen flex items-center justify-center">
        <Image className="object-cover" src="/images/djo2.jpg" alt="" fill />
        <Loginform />
      </div>
    </div>
  );
};

export default page;
