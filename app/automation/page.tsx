import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeatureGrid } from "../components/FeatureGrid";
import { HowItWorks } from "../components/HowItWorks";
import { FooterCTA } from "../components/FooterCTA";
import { ProofStats } from "../components/ProofStats";
import { 
  Workflow, 
  ActivitySquare, 
  SendHorizontal,
  FolderSync
} from "lucide-react";

interface Stat {
  value: string;
  name: string;
}

interface Step {
  title: string;
  description: string;
}

export const metadata = {
  title: "Workflow Automation for Business | Thomas Weld",
  description: "If you are doing it manually, there is a better way. AI workflow automation eliminates repetitive tasks.",
};

const automationFeatures = [
  {
    name: "Sales & Pipeline",
    description: "Automatically update CRM statuses, notify reps of hot leads, and trigger outreach sequences without lifting a finger.",
    icon: ActivitySquare,
  },
  {
    name: "Marketing & Lead Gen",
    description: "Connect your ad platforms, webinar software, and email tools to ensure no lead ever falls through the cracks.",
    icon: SendHorizontal,
  },
  {
    name: "Operations & Billing",
    description: "Generate invoices, chase failed payments, and update accounting software automatically when projects complete.",
    icon: Workflow,
  },
  {
    name: "Data Syncing",
    description: "Stop copying and pasting. Keep your databases, spreadsheets, and SaaS tools perfectly in sync in real-time.",
    icon: FolderSync,
  },
];

const provenStats: [Stat, Stat, Stat] = [
  { value: "48h", name: "average time from strategy call to first automation live" },
  { value: "99.9%", name: "uptime and reliability on modern serverless architecture" },
  { value: "100+", name: "popular business applications and APIs integrated" },
];

const howItWorksSteps: [Step, Step, Step] = [
  {
    title: "Map your manual work",
    description: "We identify exactly which tasks are costing your team the most time and where automation has the clearest ROI."
  },
  {
    title: "Build the system",
    description: "I connect your tools and build automations with clear logic, error handling, and documentation."
  },
  {
    title: "Hand off and support",
    description: "You get a full walkthrough and two weeks of support. Your team can manage it without a developer."
  }
];

export default function AutomationPage() {
  return (
    <>
      <Hero 
        eyebrow="Workflow Automation for Business"
        headline={
          <>
            If you are doing it manually, <br className="hidden lg:block" />
            there is a better way.
          </>
        }
        subheadline="AI workflow automation eliminates repetitive tasks from your sales, marketing, and operations so your team can focus on work that actually moves the needle."
      />
      
      <LogoBar />
      
      <FeatureGrid 
        headline="What we can automate for you"
        subheadline="The manual work that eats your day. Automated and running in the background."
        features={automationFeatures}
      />
      
      <ProofStats 
        headline="Real results"
        subheadline="Automation built with the same engineering standards used at Fortune 100 companies."
        stats={provenStats}
      />
      
      <HowItWorks 
        steps={howItWorksSteps}
      />
      
      <FooterCTA 
        headline="Your time is too valuable for manual work."
        body="Book a free 15-minute strategy call and find out what we can automate for your business this month."
      />
    </>
  );
}
