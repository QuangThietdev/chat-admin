"use client";

import Link from "next/link";
import { currentUser } from "../HomeLeftSideBar/HomeLeftSideBar";

export default function AdminComponent(): JSX.Element {
  return (
    <div className="p-3">
      <div className="text-xl text-slate-600 font-semibold capitalize">
        Welcom {currentUser.username}!
      </div>
      <div className="text-slate-500 font-medium capitalize">
        You can{" "}
        <Link href="/admin-management" className="text-blue-600">
          manage admin
        </Link>{" "}
        ,{" "}
        <Link href="/user-management" className="text-blue-600">
          management user,
        </Link>{" "}
        <Link href="/chat-history" className="text-blue-600">
          view chat history
        </Link>{" "}
        and{" "}
        <Link href="/online-user" className="text-blue-600">
          online user list
        </Link>{" "}
        on the application
      </div>
    </div>
  );
}
