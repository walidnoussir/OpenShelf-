import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen bg-[#F8F9FF]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex-1 overflow-y-auto p-8">{children}</div>
      </div>
    </main>
  );
}
