import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="h-16 bg-white/70 backdrop-blur border-b border-slate-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-3 w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input placeholder="Search cars, customers, bookings..." className="pl-9 bg-white" />
        </div>
      </div>
      <button className="ml-4 p-2 rounded-md hover:bg-slate-100">
        <Bell className="h-5 w-5 text-slate-600" />
      </button>
    </header>
  );
}


