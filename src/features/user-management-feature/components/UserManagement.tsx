"use client";
import { infomationRoom } from "@/features/chat-history-feature/components/ChatHistoryComponent";
import { Button, Table } from "antd";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const columns = [
  {
    title: "Avatar",
    key: "mainPhoto",
    render: (record: { mainPhoto: string; id: string }) => (
      <div key={record.id} className="flex-shrink-0 w-9 h-9">
        <Image
          src={record.mainPhoto}
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full h-9 object-cover"
        />
      </div>
    ),
  },
  {
    title: "User name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button type="primary">View Detail</Button>
        <Button danger style={{ marginLeft: "8px" }}>
          Block user
        </Button>
      </span>
    ),
  },
];
export default function UserManagementComponent(): JSX.Element {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-lg">User Management</div>

      <div className="mt-10 overflow-x-auto">
        <Table
          dataSource={infomationRoom.members}
          columns={columns}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
