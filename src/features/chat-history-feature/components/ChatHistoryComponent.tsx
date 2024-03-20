"use client";

import Image from "next/image";

export const infomationRoom = {
  name: "Demo Group",
  create_at: "25-02-2024",
  groupPhoto:
    "https://i.pinimg.com/564x/fa/db/c4/fadbc4a74906211612eb898989ce534d.jpg",
  members: [
    {
      id: "user01",
      key: "001",
      name: "Cristiano Ronaldo",
      lastMessage: "Good morning!",
      mainPhoto:
        "https://i.pinimg.com/564x/54/ea/58/54ea58da7bfeb8891055ce45511922e3.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user02",
      key: "002",
      name: "John Smith",
      lastMessage: "Hi every one!",
      mainPhoto:
        "https://i.pinimg.com/736x/b4/4e/7c/b44e7cbfcf97dbeac795b75100099558.jpg",
      email: "example@gmail.com",
      online: false,
    },
    {
      id: "user03",
      key: "003",
      name: "John Stone",
      lastMessage:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      mainPhoto:
        "https://i.pinimg.com/736x/37/6c/5c/376c5cba78f9a40a2511c10c6d1a07c8.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user04",
      key: "004",
      name: "John Cena",
      lastMessage: "Good morning!",
      mainPhoto:
        "https://i.pinimg.com/564x/dd/07/b3/dd07b3608761b13a4727f5632872f995.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user05",
      key: "005",
      name: "John Smith",
      lastMessage: "Hi every one!",
      mainPhoto:
        "https://i.pinimg.com/736x/b4/4e/7c/b44e7cbfcf97dbeac795b75100099558.jpg",
      email: "example@gmail.com",
      online: false,
    },
    {
      id: "user06",
      key: "006",
      name: "John Stone",
      lastMessage:
        "How are you today! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      mainPhoto:
        "https://i.pinimg.com/736x/37/6c/5c/376c5cba78f9a40a2511c10c6d1a07c8.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user07",
      key: "007",
      name: "John Cena",
      lastMessage: "Good morning!",
      mainPhoto:
        "https://i.pinimg.com/564x/dd/07/b3/dd07b3608761b13a4727f5632872f995.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user08",
      key: "008",
      name: "John Smith",
      lastMessage: "Hi every one!",
      mainPhoto:
        "https://i.pinimg.com/736x/b4/4e/7c/b44e7cbfcf97dbeac795b75100099558.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user09",
      key: "009",
      name: "John Stone",
      lastMessage:
        "How are you today! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      mainPhoto:
        "https://i.pinimg.com/736x/37/6c/5c/376c5cba78f9a40a2511c10c6d1a07c8.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user10",
      key: "010",
      name: "John Cena",
      lastMessage: "Good morning!",
      mainPhoto:
        "https://i.pinimg.com/564x/dd/07/b3/dd07b3608761b13a4727f5632872f995.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user11",
      key: "011",
      name: "John Smith",
      lastMessage: "Hi every one!",
      mainPhoto:
        "https://i.pinimg.com/736x/b4/4e/7c/b44e7cbfcf97dbeac795b75100099558.jpg",
      email: "example@gmail.com",
      online: true,
    },
    {
      id: "user12",
      key: "012",
      name: "John Stone",
      lastMessage:
        "How are you today! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      mainPhoto:
        "https://i.pinimg.com/736x/37/6c/5c/376c5cba78f9a40a2511c10c6d1a07c8.jpg",
      email: "example@gmail.com",
      online: true,
    },
  ],
};

export default function ChatHistoryComponent(): JSX.Element {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-lg">Chat History</div>

      <div className="mt-10 flex justify-center">
        <div className="border border-slate--500 rounded-lg">
          <div className="flex items-center gap-3 sticky top-0 z-10 bg-white rounded-t-lg mb-3 p-3">
            <div className="flex w-12 h-12 cursor-pointer">
              <Image
                src={infomationRoom.groupPhoto}
                alt="Avatar"
                unoptimized
                width={48}
                height={48}
                className="rounded-full h-12"
              />
            </div>
            <div className="text-xl text-gray-700 font-semibold">
              {infomationRoom.name}
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3">
            {infomationRoom.members.map((items) => (
              <div key={items.id} className="flex gap-3 items-end">
                <div className="flex-shrink-0 w-9 h-9">
                  <Image
                    src={items.mainPhoto}
                    alt="Avatar"
                    width={36}
                    height={36}
                    className="rounded-full h-9 object-cover"
                  />
                </div>

                <div>
                  <div className="text-xs text-gray-400 truncate mx-3">
                    {items.name}
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                    <div className="bg-slate-50 p-2 px-3 font-normal">
                      {items.lastMessage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
