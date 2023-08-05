"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./UserCard";

export default function Login () {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <button onClick={() => signOut()} type="button" className="dark:text-white rounded-full bg-orange-500 p-3">Sign out of google</button>
                <UserCard user={session.user} />
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="dark:text-white rounded-full bg-orange-500 p-3">Sign in with google</button>
            </>
        )
    }
}; 