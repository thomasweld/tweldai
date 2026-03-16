interface HeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: React.ReactNode;
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaText = "Get a Free Strategy Call",
  ctaLink = "https://calendly.com/thomas-weld-ai",
  secondaryCta
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300 mb-8 backdrop-blur-md">
          {eyebrow}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6 text-balance text-gradient">
          {headline}
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 text-balance">
          {subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto"
          >
            {ctaText}
          </a>
          {secondaryCta && (
            <div className="w-full sm:w-auto text-center sm:text-left">
              {secondaryCta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
