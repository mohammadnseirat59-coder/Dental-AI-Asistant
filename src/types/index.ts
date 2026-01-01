import { LucideIcon } from "lucide-react";

export interface ISectionProps {
  id: string;
  label: string;
}

export interface IActionButtonProps {
  Icon?: LucideIcon;
  label?: string;
  onClick?: () => void;
  btnClassName?: string;
  varieant?: "default" | "outline" | "ghost" | "link" | "destructive";
  labelClassName?: string;
  iconClassName?: string;
  btnType?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  showLaodingText?: boolean;
  size?: "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | "default";
}

//! types for Card Content:
export interface ICardContentProps {
  icon: string;
  title: string;
  description: string;
  badgeText: { firstBadge: string; secondBadge: string };
}
