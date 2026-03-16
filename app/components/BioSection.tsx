import Image from "next/image";

export function BioSection() {
  const skills = [
    "Full-stack engineering",
    "AI and automation",
    "Team leadership",
    "System architecture",
    "AWS",
    "Node.js",
    "React"
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 lg:grid-cols-12">
            
            {/* Image Column */}
            <div className="lg:col-span-5 lg:-mt-8 xl:col-span-4 relative flex items-center justify-center">
              {/* Gradient border ring */}
              <div className="w-full max-w-md p-[10px] rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 shadow-2xl shadow-blue-500/20">
                <div className="w-full relative aspect-[3/4] max-w-md rounded-2xl bg-neutral-900 overflow-hidden">
                  <Image
                    src="/thomas-weld-tech-ai-consultant-profile-pic-portrait.jpg"
                    alt="Thomas Weld"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-neutral-950/80 to-transparent">
                    <p className="text-xl font-bold text-white tracking-tight">Thomas Weld</p>
                    <p className="text-sm font-medium text-neutral-300">Fractional CTO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 xl:col-span-8 lg:mt-8">
              <div className="max-w-2xl text-base/7 text-neutral-300">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-8 sm:text-4xl text-gradient">
                  Thomas Weld
                </h2>
                
                <div className="space-y-6 text-lg/8">
                  <p>
                    I have spent over a decade building software for Fortune 100 companies including Capital One, Home Depot, and Pluto TV. I have led engineering teams, managed migrations of millions of customers, contributed to a 21% revenue increase on one of the largest ecommerce checkouts in the US, and built AI-powered products from the ground up.
                  </p>
                  <p>
                    Now I work directly with small businesses and startups that need that same level of engineering leadership without a full-time executive hire.
                  </p>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-sm font-semibold tracking-wide text-white mb-6 uppercase">Core Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition cursor-default shadow-sm backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
