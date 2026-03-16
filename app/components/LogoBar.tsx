export function LogoBar({ label = "Trusted experience from" }: { label?: string }) {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container overflow-hidden">
        <p className="text-center text-sm/6 font-medium text-neutral-400 mb-8">
          {label}
        </p>
        <div className="mx-auto flex max-w-lg items-center justify-between gap-x-8 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none justify-center">
          <div className="glass-panel px-6 py-3 rounded-xl flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300">
             <span className="font-bold text-lg tracking-tight">Capital One</span>
          </div>
          <div className="glass-panel px-6 py-3 rounded-xl flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300">
             <span className="font-bold text-lg tracking-tight">Home Depot</span>
          </div>
          <div className="glass-panel px-6 py-3 rounded-xl flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300">
             <span className="font-bold text-lg tracking-tight">Pluto TV</span>
          </div>
        </div>
      </div>
    </section>
  );
}
