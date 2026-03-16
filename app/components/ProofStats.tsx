interface Stat {
  value: string;
  name: string;
}

interface ProofStatsProps {
  headline: string;
  subheadline: string;
  stats: [Stat, Stat, Stat];
}

export function ProofStats({ headline, subheadline, stats }: ProofStatsProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-gradient">
            {headline}
          </h2>
          <p className="mt-6 text-base/7 text-neutral-400">
            {subheadline}
          </p>
        </div>
        
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl glass-panel p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
            >
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:max-w-none">
                <p className="text-lg font-medium tracking-tight text-neutral-300">
                  {stat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
