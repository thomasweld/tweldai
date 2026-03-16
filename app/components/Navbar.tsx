"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Chatbot", href: "/chatbot" },
  { name: "Automation", href: "/automation" },
  { name: "Fractional CTO", href: "/fractional-cto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <nav aria-label="Global" className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="font-semibold text-lg tracking-tight">Thomas Weld</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-400 hover:text-white transition"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
               <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm/6 transition-colors font-medium",
                pathname === item.href
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://calendly.com/thomas-weld-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm/6 font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200 transition-colors"
          >
             Get a Free Strategy Call
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-background px-6 py-6 overflow-y-auto">
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base/7 font-medium rounded-lg hover:bg-white/5",
                  pathname === item.href ? "text-white bg-white/5" : "text-neutral-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5">
              <a
                href="https://calendly.com/thomas-weld-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-lg bg-white px-3 py-2.5 text-base/7 font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200"
              >
                 Get a Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
