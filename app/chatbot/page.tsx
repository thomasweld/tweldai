import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeatureGrid } from "../components/FeatureGrid";
import { HowItWorks } from "../components/HowItWorks";
import { FooterCTA } from "../components/FooterCTA";
import { 
  Clock, 
  CalendarDays, 
  Database,
  Users
} from "lucide-react";

interface Step {
  title: string;
  description: string;
}

export const metadata = {
  title: "AI Chatbots for Business | Thomas Weld",
  description: "Your website should be working for you around the clock. AI chatbots answer questions, capture leads, and book appointments 24/7.",
};

const chatbotFeatures = [
  {
    name: "24/7 Customer Service",
    description: "Your bot never sleeps. Customers get immediate, accurate answers to their questions at 2 AM or on weekends.",
    icon: Clock,
  },
  {
    name: "Automated Lead Capture",
    description: "Stop relying on basic contact forms. Engage visitors in a conversation and capture their information when intent is highest.",
    icon: Users,
  },
  {
    name: "Meeting Booking",
    description: "The bot syncs with your calendar and qualifies leads before letting them book a consultation directly in the chat.",
    icon: CalendarDays,
  },
  {
    name: "Trained on your business",
    description: "Not a generic AI. We connect the bot to your website, documents, and FAQs so it gives answers specific to your company policies.",
    icon: Database,
  },
];

const whoIsThisForFeatures = [
  {
    name: "Service Businesses",
    description: "Contractors, law firms, and agencies who miss calls when they are on the job or in court.",
    icon: Users,
  },
  {
    name: "B2B SaaS & Tech",
    description: "Companies with high traffic that need to qualify leads before routing to sales.",
    icon: Users,
  },
  {
    name: "E-Commerce",
    description: "Stores getting the same \"Where is my order?\" and return policy questions every day.",
    icon: Users,
  },
  {
    name: "Consultants & Coaches",
    description: "Solopreneurs who need a digital assistant to handle the top of the funnel while they focus on clients.",
    icon: Users,
  },
];

const howItWorksSteps: [Step, Step, Step] = [
  {
    title: "Strategy call",
    description: "We identify the top questions your customers ask and what actions you want the bot to take."
  },
  {
    title: "Build and train",
    description: "I build a chatbot trained on your business. It knows your services, your tone, and your policies."
  },
  {
    title: "Launch in days",
    description: "Goes live on your website with a simple code snippet. Starts working immediately."
  }
];

export default function ChatbotPage() {
  return (
    <>
      <Hero 
        eyebrow="AI Chatbot for Your Business"
        headline={
          <>
            Your website should be <br className="hidden lg:block" /> 
            working for you around the clock.
          </>
        }
        subheadline="An AI chatbot answers customer questions, captures leads, and books appointments 24 hours a day. No staff required."
      />
      <LogoBar />
      <FeatureGrid 
        headline="What your AI chatbot can do"
        subheadline="Built specifically for your business. Not a generic template. Not a copy-paste script."
        features={chatbotFeatures}
      />
      <FeatureGrid 
        headline="Who this is for"
        subheadline="If your business gets repeat questions, misses leads after hours, or spends too much time on basic customer service this was built for you."
        features={whoIsThisForFeatures}
      />
      <HowItWorks 
        steps={howItWorksSteps}
      />
      <FooterCTA 
        headline="Stop missing customers after hours."
        body="Book a free 15-minute call and find out what an AI chatbot could do for your business."
      />
    </>
  );
}
