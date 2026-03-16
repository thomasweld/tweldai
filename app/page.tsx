import { Hero } from "./components/Hero";
import { LogoBar } from "./components/LogoBar";
import { FeatureGrid } from "./components/FeatureGrid";
import { ProofStats } from "./components/ProofStats";
import { HowItWorks } from "./components/HowItWorks";
import { FooterCTA } from "./components/FooterCTA";
import { 
  MessageSquareReply, 
  Workflow, 
  DatabaseZap, 
  Bot 
} from "lucide-react";

interface Stat {
  value: string;
  name: string;
}

interface Step {
  title: string;
  description: string;
}

const servicesFeatures = [
  {
    name: "Customer Service Chatbots",
    description: "AI agents that answer common questions, capture leads, and book meetings on your website 24/7.",
    icon: MessageSquareReply,
  },
  {
    name: "Sales & CRM Automation",
    description: "Automatically log leads, trigger follow-up sequences, and route high-value prospects to your sales team.",
    icon: Workflow,
  },
  {
    name: "Internal Data Workflows",
    description: "Connect your disparate tools. Automatically sync data between your CRM, billing, and project management software.",
    icon: DatabaseZap,
  },
  {
    name: "Custom AI Assistants",
    description: "Internal tools trained on your company data to help your team find answers, draft emails, and work faster.",
    icon: Bot,
  },
];

const provenStats: [Stat, Stat, Stat] = [
  { value: "24/7", name: "availability for your customers and lead capture" },
  { value: "40+", name: "hours saved per week on repetitive manual tasks" },
  { value: "10x", name: "faster response times compared to manual follow-ups" },
];

const howItWorksSteps: [Step, Step, Step] = [
  {
    title: "Free strategy call",
    description: "We talk through your business, your biggest time sinks, and where automation can have the most impact."
  },
  {
    title: "Custom plan",
    description: "You get a clear proposal with scope, timeline, and a fixed price. No open-ended billing."
  },
  {
    title: "Build and deploy",
    description: "I build your automation, walk you through it, and hand it off with documentation you can actually use."
  }
];

export default function Home() {
  return (
    <>
      <Hero 
        eyebrow="Senior Software Engineer and AI Consultant"
        headline={
          <>
            Grow your revenue with <br className="hidden lg:block" /> 
            AI automations.
          </>
        }
        subheadline="AI automation for sales, marketing, and customer service. Scale up, reduce busywork."
        secondaryCta={
          <a href="tel:813-XXX-XXXX" className="text-sm font-semibold text-neutral-400 hover:text-white transition">
            Call 813-XXX-XXXX
          </a>
        }
      />
      <LogoBar />
      <FeatureGrid 
        headline="What I help you automate"
        subheadline="Stop losing revenue to slow follow-ups, missed leads, and repetitive manual work. AI handles it while you focus on running your business."
        features={servicesFeatures}
      />
      <ProofStats 
        headline="Proven at scale"
        subheadline="Fortune 100 engineering experience applied to businesses of every size."
        stats={provenStats}
      />
      <HowItWorks 
        steps={howItWorksSteps}
      />
      <FooterCTA 
        headline="Ready to stop doing manually what AI can do automatically?"
        body="Book a free 15-minute strategy call. No pitch, no pressure. Just a clear look at where AI can help your business grow."
      />
    </>
  );
}
