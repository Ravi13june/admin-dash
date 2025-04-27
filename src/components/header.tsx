// components/Header.tsx
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header style={{ height: "121px" }} className="ml-[436px] fixed top-0 left-0 right-0 border-b bg-white z-50 mb-8">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search Section */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50"
          />
        </div>

        {/* Admin Profile Section */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="font-medium text-sm">Kalyani Kumar</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            KK
          </div>
        </div>
      </div>
    </header>
  );
}