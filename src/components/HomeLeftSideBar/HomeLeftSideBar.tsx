"use client";

import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const currentUser = {
  email: "admin@btc-studio.io",
  username: "Admin BTC",
};
export default function HomeLeftSideBar(): JSX.Element {
  const pathname = usePathname();

  const menuItems = [
    {
      key: "admin-management",
      label: <Link href={"/admin-management"}>Admin Management</Link>,
    },
    {
      key: "user-management",
      label: <Link href={"/user-management"}>User Management</Link>,
    },
    {
      key: "chat-history",
      label: <Link href={"/chat-history"}>Chat History</Link>,
    },
    {
      key: "online-user",
      label: <Link href={"/online-user"}>Online User List</Link>,
    },
  ];

  const handleLogout = (): void => {};
  return (
    <div className="h-screen grid grid-cols-[1fr] grid-rows-[auto_1fr_auto] bg-[#001529] w-[200px]">
      <div className="text-white text-center p-3 truncate border-0 border-b border-solid border-white">
        <div className="truncate">{currentUser?.email}</div>
        <div className="truncate">{currentUser?.username}</div>
      </div>

      <div className="overflow-auto">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname.split("/")[1]]}
          items={menuItems}
        />
      </div>

      <div className="flex h-10 border-0 border-t border-solid border-white">
        <div
          className="cursor-pointer text-white font-bold m-auto"
          onClick={handleLogout}
        >
          Log out
        </div>
      </div>
    </div>
  );
}
