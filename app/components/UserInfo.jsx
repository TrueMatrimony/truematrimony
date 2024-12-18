"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name:<span className="font-bold py-2">{session?.user?.name}</span>
        </div>
        <div>
          Email:<span className="font-bold py-2">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white mt-3 font-bold py-2 px-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}