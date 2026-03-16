import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Chatbot", href: "/chatbot" },
  { name: "Automation", href: "/automation" },
  { name: "Fractional CTO", href: "/fractional-cto" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 lg:py-16">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-2">Thomas Weld</h3>
            <p className="text-sm/6 text-neutral-400 max-w-xs">
              AI automation for sales, marketing, and customer service.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul role="list" className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm/6 text-neutral-400 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul role="list" className="space-y-3">
              <li>
                <a href="tel:813-XXX-XXXX" className="text-sm/6 text-neutral-400 hover:text-white transition">
                  813-XXX-XXXX
                </a>
              </li>
              <li>
                <a href="mailto:your@email.com" className="text-sm/6 text-neutral-400 hover:text-white transition">
                  your@email.com
                </a>
              </li>
              <li>
                <div className="text-sm/6 text-neutral-400">
                  tweldai.com
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs/5 text-neutral-500">
             © 2026 Thomas Weld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
