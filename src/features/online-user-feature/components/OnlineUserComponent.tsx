"use client";

import { infomationRoom } from "@/features/chat-history-feature/components/ChatHistoryComponent";
import Image from "next/image";
import React from "react";

export default function OnlineUserComponent(): JSX.Element {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-lg">Online User List</div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {infomationRoom.members.map((items) => (
          <React.Fragment key={items.id}>
            {items.online && (
              <div className="flex items-center flex-col gap-1 cursor-pointer">
                <div className="w-14 h-14">
                  <Image
                    src={items.mainPhoto}
                    width={56}
                    height={56}
                    alt="avatar"
                    className="rounded-full object-cover h-14"
                  />
                </div>
                <div className="flex items-center gap-2 truncate">
                  <div className="h-[9px] w-[9px] bg-[#17DB4E] rounded" />
                  <div className="font-normal">{items.name}</div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
