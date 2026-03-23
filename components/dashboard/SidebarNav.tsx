"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard/overview" },
  { label: "Clients", href: "/dashboard/clients" },
  { label: "Campaigns", href: "/dashboard/campaigns" },
  { label: "Team", href: "/dashboard/team" },
  { label: "Settings", href: "/dashboard/settings" },
];

export const SidebarNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          className={`rounded-md px-3 py-2 text-base font-medium transition hover:bg-primary/10 ${
            pathname === item.href
              ? "bg-primary/10 text-primary font-bold"
              : "text-foreground"
          }`}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};