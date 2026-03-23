import { SidebarNav } from "@/components/dashboard/SidebarNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Placeholder user name, replace with real session in future
  const userName = "User";
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex h-16 items-center border-b px-8 font-bold text-xl bg-white shadow-sm">
        Welcome to AgencyFlow
      </header>
      <div className="flex flex-1">
        <aside className="w-56 border-r bg-muted px-4 py-8">
          <SidebarNav />
        </aside>
        <main className="flex-1 px-8 py-10">
          <div className="text-lg mb-6 text-foreground font-semibold">{`Hi ${userName}, let’s grow your agency with AgencyFlow.`}</div>
          {children}
        </main>
      </div>
    </div>
  );
}