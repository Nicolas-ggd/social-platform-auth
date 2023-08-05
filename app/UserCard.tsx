import { DefaultSession } from "next-auth";

export function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user?.image || ""}
          alt="No img"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email}
        </span>
      </div>
    </div>
  );
}
