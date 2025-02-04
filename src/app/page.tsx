import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>welcome to my page</h1>
      <div className="flex text-center ">
        <Link rel="stylesheet" href="/login" className="mt-14">
          go to login page
        </Link>
        <Link rel="stylesheet" href="/register" className="m-14">
          go to register page
        </Link>
      </div>
    </div>
  );
};
