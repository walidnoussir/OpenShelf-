import Link from "next/link";
import { BookOpen, House, PlusCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-[#D9E2F2] bg-[#EEF4FF] text-black">
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-[20px] font-bold text-[#0B57D0]">Lumina Library</h1>

        <p className="mt-1 text-sm font-medium text-[#3C4043]">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-4">
        {/* Active */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl bg-[#66F2BE] px-4 py-3 text-[15px] font-medium text-[#004D40]"
        >
          <BookOpen size={18} />
          Catalog
        </Link>

        <Link
          href="/members"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-[#303030] transition hover:bg-[#E3ECFF]"
        >
          <House size={18} />
          Members
        </Link>

        <Link
          href="/reports"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-[#303030] transition hover:bg-[#E3ECFF]"
        >
          <PlusCircle size={18} />
          Reports
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-[#303030] transition hover:bg-[#E3ECFF]"
        >
          <BookOpen size={18} />
          Settings
        </Link>
      </nav>

      <div className="m-4 rounded-2xl bg-[#E6EEFF] p-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <p className="text-sm font-semibold text-[#1F1F1F]">Admin User</p>

            <p className="text-xs text-[#5F6368]">Librarian</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
