"use client";

import { useState } from "react";
import { Home, FileText, User, Bookmark, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import FormComponent from "@/components/dashboard-components/UserDetails"; 
import { useUser } from "../app/hooks/useUser";

const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Form", icon: FileText },
  { name: "Profile", icon: User },
  { name: "Saved Jobs", icon: Bookmark },
  { name: "Recommended Jobs", icon: Briefcase },
];

export default function Dashboard() {
    const { userName, loading } = useUser();

  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 text-white flex flex-col space-y-6">
        <h1 className="text-4xl font-bold text-left mr-1">SkillSync
            <br />
            Welcome, {userName ? userName : "Guest"}!
        </h1>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition",
                active === item.name ? "bg-purple-600" : "hover:bg-gray-700"
              )}
              onClick={() => setActive(item.name)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {active === "Form" ? (
            <FormComponent />
          ) : (
            <p className="text-gray-500 mt-2">Content for {active} goes here.</p>
          )}
        </div>
      </main>
    </div>
  );
}
