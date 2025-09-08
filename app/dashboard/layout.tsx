import Link from "next/link";
import { ReactNode } from "react";
import { Home, Settings, User, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      <aside className="w-64 bg-white border-r border-slate-200 p-4 sticky top-0 h-screen">
        <div className="mb-6">
          <Link href="/dashboard" className="text-xl font-semibold">
            My Dashboard
          </Link>
        </div>
        <nav className="space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100">
            <Home className="h-4 w-4" />
            <span>Overview</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100">
            <User className="h-4 w-4" />
            <span>Users</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6">
          <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 w-full text-left">
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}


