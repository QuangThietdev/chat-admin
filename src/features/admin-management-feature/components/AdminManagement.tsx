"use client";
import { Button, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    key: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Super Admin",
  },
];

const columns = [
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
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button type="primary">Edit</Button>
        <Button danger style={{ marginLeft: "8px" }}>
          Delete
        </Button>
      </span>
    ),
  },
];
export default function AdminManagementComponent(): JSX.Element {
  return (
    <div className="flex flex-col p-5">
      <div className="font-bold text-lg">Admin Management</div>

      <div className="ml-auto">
        <Button type="primary" className="!font-bold">
          Create A New Administrator
        </Button>
      </div>

      <div className="mt-10">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}
