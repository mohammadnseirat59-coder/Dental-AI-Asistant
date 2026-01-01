import { ICardContentProps, ISectionProps } from "@/types";

import { title } from "process";

export const section_LInks: ISectionProps[] = [
  {
    id: "how-it-works",
    label: "How It Works",
  },
  {
    id: "what-to-ask",
    label: "What To Ask",
  },
  {
    id: "pricing",
    label: "Pricing",
  },
];

export const Card_Content: ICardContentProps[] = [
  {
    icon: "/icons/audio.png",
    title: "Ask Questions",
    description:
      "Connect with our AI assistant for immediate answers to common dental issues, care options, and preventive advice.",
    badgeText: {
      firstBadge: "24/7 Available",
      secondBadge: "Instant Response",
    },
  },
  {
    icon: "/icons/brain.png",
    title: "Get Expert Advice",
    description:
      "Our AI analyzes thousands of dental cases to offer personalized, professional-grade recommendations.",
    badgeText: {
      firstBadge: "AI-Powered",
      secondBadge: "Personalized Care",
    },
  },
  {
    icon: "/icons/calendar.png",
    title: "Book & Get Care",
    description:
      "Book appointments with trusted, verified dentists and enjoy complete follow-up care while easily tracking your progress.",
    badgeText: {
      firstBadge: "Follow-up Care",
      secondBadge: "Follow-up Care",
    },
  },
];
