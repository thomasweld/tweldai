interface FooterCTAProps {
  headline: string;
  body: string;
  ctaText?: string;
  ctaLink?: string;
}

export function FooterCTA({
  headline,
  body,
  ctaText = "Get a Free Strategy Call",
  ctaLink = "https://calendly.com/thomas-weld-ai",
}: FooterCTAProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900 border-y border-white/5" />
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-25">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center glass-panel p-8 sm:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance text-gradient">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-neutral-300 text-balance">
            {body}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
