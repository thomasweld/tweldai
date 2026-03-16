import { type LucideIcon } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  headline: string;
  subheadline: string;
  features: Feature[];
}

export function FeatureGrid({ headline, subheadline, features }: FeatureGridProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-neutral-400 text-gradient">
            {headline}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl text-balance">
             {subheadline}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
