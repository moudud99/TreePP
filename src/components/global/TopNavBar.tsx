import Link from "next/link";
import React from "react";

export default function TopNavBar() {
  return (
    <div className="pr-32 pl-16 py-2 bg-slate-900 flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center">
      <img src="/logo.jpeg" alt="" className="h-12 w-auto rounded-full" />

      <div className="flex flex-col md:flex-row gap-x-10 items-center">
        <Link
          href="/mission"
          className="uppercase tracking-widest text-sm text-white font-medium border-b-2 transition duration-300 border-transparent hover:border-green-400"
        >
          Mission
        </Link>
        <Link
          href="/vision"
          className="uppercase tracking-widest text-sm text-white font-medium border-b-2 transition duration-300 border-transparent hover:border-green-400"
        >
          Vision
        </Link>
        <Link
          href="/team"
          className="uppercase tracking-widest text-sm text-white font-medium border-b-2 transition duration-300 border-transparent hover:border-green-400"
        >
          Team
        </Link>
        <Link
          href="/join"
          className="uppercase tracking-widest text-sm font-medium text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-300"
        >
          Join
        </Link>
      </div>
    </div>
  );
}