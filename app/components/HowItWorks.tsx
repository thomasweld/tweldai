interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  headline?: string;
  steps: [Step, Step, Step];
}

export function HowItWorks({ headline = "How it works", steps }: HowItWorksProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-neutral-950">
      {/* Decorative gradient background element for contrast */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[300px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent blur-[80px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-gradient">
            {headline}
          </h2>
        </div>
        
        <div className="mx-auto max-w-2xl">
          <div className="space-y-12 pl-4 sm:pl-0 border-l border-white/10 sm:border-none">
            {steps.map((step, index) => (
              <div key={step.title} className="relative sm:flex sm:gap-x-8">
                {/* Mobile line indicator indicator */}
                <span className="absolute -left-6 top-1.5 flex size-4 items-center justify-center rounded-full bg-blue-500 ring-4 ring-neutral-950 sm:hidden">
                  <span className="sr-only">Step {index + 1}</span>
                </span>
                
                {/* Desktop numbered icon */}
                <div className="hidden sm:flex sm:size-16 sm:shrink-0 sm:-ml-8 sm:items-center sm:justify-center sm:rounded-full sm:bg-neutral-900 sm:ring-1 sm:ring-white/10 sm:text-2xl sm:font-bold sm:text-white glass-panel">
                  {index + 1}
                </div>
                
                <div className="sm:pt-3">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base/7 text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
