"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./UserCard";

export default function Login () {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="w-full flex justify-center items-center flex-col">
                <button onClick={() => signOut()} type="button" className="dark:text-white rounded-full bg-blue-500 p-3 my-3">Sign Out</button>
                <UserCard user={session.user} />
            </div>
        )
    } else {
        return (
            <div className="w-full flex justify-center items-center flex-col">
                <button onClick={() => signIn()} type="button" className="dark:text-white rounded-full bg-orange-500 p-3 my-3 hover:bg-orange-700 transition duration-300">Join us with provider</button>
            </div>
        )
    }
}; 