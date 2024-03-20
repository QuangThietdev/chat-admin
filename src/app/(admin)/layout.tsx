import HomeLeftSideBar from "@/components/HomeLeftSideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <HomeLeftSideBar />
      <div className="h-screen overflow-auto">{children}</div>
    </div>
  );
}
