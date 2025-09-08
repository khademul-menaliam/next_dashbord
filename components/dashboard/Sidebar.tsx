import Link from "next/link";
import { Car, CalendarDays, Users, Settings, LayoutDashboard } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/fleet", label: "Fleet", icon: Car },
  { href: "/dashboard/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-600 via-fuchsia-500 to-blue-500 text-white p-4 sticky top-0 h-screen">
      <div className="mb-6">
        <Link href="/dashboard" className="text-xl font-semibold block">
          RideRent Admin
        </Link>
        <p className="text-white/80 text-xs mt-1">Car Rental Owner</p>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/15 transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}


