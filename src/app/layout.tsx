"use client";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/constant";
import { Input } from "@/components/ui/input";
import BellIcon from "@/icons/BellIcon";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const router = useRouter()
  // const pathname = usePathname();
  const isAuthPage = pathname === "/" || pathname.startsWith("/register"); 
  
  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <html lang="en">
      <body className={nunitoSans.className}>
      { isAuthPage?<>{children}</>: <ReactQueryProvider>
          <div className="min-h-screen flex">
            {/* Fixed Sidebar */}
            <aside
              className="bg-white border-r fixed h-screen overflow-y-auto z-50"
              style={{ width: "436px" }}
            >
              <div className="ml-[72px] mt-[10px] mb-[5px]">
                <Image
                  src="/logo-free.png"
                  alt="Company Logo"
                  width={126}
                  height={88}
                  priority
                />
              </div>
              <nav className="space-y-1 ml-[72px]">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  const hasChild = item.child?true:false
                  const isOpen = openMenus[item.name];

                  return (
                    <div key={item.name}>
                      <div
                        onClick={() => hasChild && toggleMenu(item.name)}
                        className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer
                          ${
                            isActive
                              ? "bg-[#199FB1] text-white"
                              : "text-black hover:bg-gray-100"
                          }`}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 w-full"
                        >
                          {Icon && (
                            <Icon
                              size={24}
                              color={isActive ? "white" : "black"}
                            />
                          )}
                          <span className={`font-semibold text-xl`}>
                            {item.name}
                          </span>
                        </Link>
                        {hasChild && (
                          <div className="mr-3">
                            {isOpen ? (
                              <ChevronDown size={20} />
                            ) : (
                              <ChevronRight size={20} />
                            )}
                          </div>
                        )}
                      </div>
                      {hasChild && isOpen && (
                        <div className="ml-10 space-y-1">
                          {item.child?.map((childItem) => (
                            <Link
                              key={childItem.name}
                              href={childItem.href}
                              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100"
                            >
                              {childItem.icon && (
                                <childItem.icon size={20} color="gray" />
                              )}
                              <span className="text-gray-700">
                                {childItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 ml-[436px]">
              {/* Fixed Header */}
              <header className="fixed top-0 left-[436px] right-0 h-[121px] border-b bg-white z-40 pr-20">
                <div className="flex items-center justify-between h-full px-6">
                  <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                  <BellIcon/>
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white ml-10">
                      KK
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm">Kalyani Kumar</span>
                      <span className="text-xs text-gray-500">Admin</span>
                    </div>
                    
                  </div>
                </div>
              </header>
              <main className="relative pt-[121px] min-h-screen overflow-hidden bg-gray-50">
  {/* Content wrapper */}
  <div className="relative z-10 p-8">
    {children}
  </div>

  {/* Background Image only below header */}
  <div className="absolute top-[121px] w-full h-[300] z-0">
    <Image
      src="/layoutbg.jpg"
      alt="Background"
      fill
      // className="object-cover"
      priority
    />
  </div>
</main>

            </div>
          </div>
        </ReactQueryProvider>}
      </body>
    </html>
  );
}