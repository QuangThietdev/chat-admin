"use client";

import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

const database = {
  email: "admin@btc-studio.io",
  password: "123",
};

export default function HomePage(): JSX.Element {
  const router = useRouter();
  const onSubmit = (values: { email: string; password: string }): void => {
    if (
      values.email === database.email &&
      values.password === database.password
    ) {
      router.push("/admin");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full border border-slate-300 p-10 rounded-lg">
        <div className="text-xl font-bold mb-5 flex justify-center">
          Sign in to your account
        </div>
        <Form layout="vertical" onFinish={onSubmit}>
          <Form.Item
            name="email"
            label="Your Email"
            className="font-medium"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="font-medium"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              size="large"
              type="password"
              placeholder="••••••••"
              autoComplete="on"
            />
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="!h-11">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}
