import { KPICard } from "@/components/dashboard/KPICard";
import { DataTable } from "@/components/dashboard/DataTable";

type Booking = {
  id: string;
  customer: string;
  car: string;
  pickup: string;
  return: string;
  total: string;
  status: string;
};

const recentBookings: Booking[] = [
  { id: "B-1024", customer: "Alex Kim", car: "Tesla Model 3", pickup: "2025-08-01", return: "2025-08-03", total: "$240", status: "Confirmed" },
  { id: "B-1023", customer: "Priya Patel", car: "Toyota Corolla", pickup: "2025-08-02", return: "2025-08-05", total: "$180", status: "Ongoing" },
  { id: "B-1022", customer: "John Doe", car: "BMW X5", pickup: "2025-08-04", return: "2025-08-07", total: "$420", status: "Pending" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p className="text-slate-500 text-sm">Welcome back! Here’s what’s happening with your rentals.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <KPICard title="Active Rentals" value="87" subtitle="+12% vs last week" gradientFrom="from-fuchsia-500" gradientTo="to-purple-600" />
        <KPICard title="Fleet Utilization" value="76%" subtitle="12/16 cars out" gradientFrom="from-blue-500" gradientTo="to-cyan-500" />
        <KPICard title="Monthly Revenue" value="$12,345" subtitle="+8% vs last month" gradientFrom="from-emerald-500" gradientTo="to-teal-500" />
        <KPICard title="Pending Requests" value="14" subtitle="Need review" gradientFrom="from-amber-500" gradientTo="to-orange-500" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-3">
          <h2 className="text-lg font-semibold">Recent Bookings</h2>
          <DataTable
            columns={[
              { key: "id", header: "ID" },
              { key: "customer", header: "Customer" },
              { key: "car", header: "Car" },
              { key: "pickup", header: "Pickup" },
              { key: "return", header: "Return" },
              { key: "total", header: "Total" },
              { key: "status", header: "Status" },
            ]}
            data={recentBookings}
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Fleet Snapshot</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-gradient-to-br from-sky-400 to-indigo-500 text-white">
              <div className="text-sm/5 opacity-90">Available</div>
              <div className="text-2xl font-bold">4</div>
            </div>
            <div className="rounded-xl p-4 bg-gradient-to-br from-rose-500 to-pink-500 text-white">
              <div className="text-sm/5 opacity-90">In Service</div>
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="rounded-xl p-4 bg-gradient-to-br from-violet-500 to-purple-600 text-white">
              <div className="text-sm/5 opacity-90">Rented</div>
              <div className="text-2xl font-bold">10</div>
            </div>
            <div className="rounded-xl p-4 bg-gradient-to-br from-lime-500 to-green-500 text-white">
              <div className="text-sm/5 opacity-90">Maintenance</div>
              <div className="text-2xl font-bold">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


