import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeatureGrid } from "../components/FeatureGrid";
import { BioSection } from "../components/BioSection";
import { FooterCTA } from "../components/FooterCTA";
import { 
  Building2, 
  Map, 
  Settings,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Fractional CTO & Technical Advisor | Thomas Weld",
  description: "Senior engineering leadership without the full-time cost. Get a seasoned technologist on your team for decisions, direction, and execution.",
};

const ctoFeatures = [
  {
    name: "System Architecture",
    description: "Design scalable, secure, and maintainable systems from day one. Avoid expensive rewrites when you start getting traction.",
    icon: Map,
  },
  {
    name: "Team Leadership",
    description: "Manage your engineering team, run agile sprints, mentor junior developers, and establish code quality standards.",
    icon: Users, // Using a generic placeholder icon as it's not imported above
  },
  {
    name: "Tech Stack Selection",
    description: "Choose the right tools for your specific business needs, not just whatever framework is currently trending on Twitter.",
    icon: Settings,
  },
  {
    name: "Vendor Management",
    description: "Evaluate third-party tools, manage offshore agencies, and ensure you're getting what you pay for from external technical partners.",
    icon: Building2, // Using a generic placeholder icon
  },
];

const whoIsThisForFeatures = [
  {
    name: "Non-Technical Founders",
    description: "You have industry expertise and a vision, but need a technical partner to turn it into software.",
    icon: ShieldCheck,
  },
  {
    name: "Bootstrapped Startups",
    description: "You have revenue but cannot justify burning $200K+ a year on a full-time executive hire just yet.",
    icon: ShieldCheck,
  },
  {
    name: "Agencies & Dev Shops",
    description: "You need senior oversight on complex client projects to ensure they are delivered correctly and on time.",
    icon: ShieldCheck,
  },
  {
    name: "Companies Scaling Up",
    description: "Your MVP is starting to break under load and you need experienced architecture guidance to scale.",
    icon: ShieldCheck,
  },
];

// Re-importing Lucide icons here since they are missing from the top imports for the features list
import { Users } from "lucide-react";

export default function FractionalCtoPage() {
  return (
    <>
      <Hero 
        eyebrow="Fractional CTO and Technical Advisor"
        headline={
          <>
            Senior engineering leadership <br className="hidden lg:block" />
            without the full-time cost.
          </>
        }
        subheadline="Get a seasoned technologist on your team for the decisions, direction, and execution your startup needs right now."
      />
      
      <LogoBar label="Experience from" />
      
      <BioSection />
      
      <FeatureGrid 
        headline="What a fractional CTO does for you"
        subheadline="The technical leadership your company needs without the $200K salary."
        features={ctoFeatures}
      />
      
      <FeatureGrid 
        headline="Who this is for"
        subheadline="You are building something real and you need technical leadership now, not in six months when you can afford a full hire."
        features={whoIsThisForFeatures}
      />
      
      <FooterCTA 
        headline="You do not have to figure out the tech alone."
        body="Book a free 15-minute call. We will talk through where your business is, what you are building, and whether working together makes sense."
      />
    </>
  );
}
