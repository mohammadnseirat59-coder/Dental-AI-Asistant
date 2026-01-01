import { LucideIcon } from "lucide-react";
import React from "react";

interface IBadgeComponentProps {
  badgeText: string;
  Icon?: LucideIcon;
  containerClassName?: string;
  iconClassName?: string;
}

const BadgeComponent = ({
  badgeText,
  Icon,
  containerClassName = "shadow-md shadow-primary",
  iconClassName,
}: IBadgeComponentProps) => {
  return (
    <div
      className={`pointer-events-none mx-auto ${containerClassName}  flex items-center justify-center w-fit  gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary backdrop-blur-lg`}
    >
      {Icon ? (
        <Icon
          className={`size-5 ${iconClassName ? iconClassName : "text-primary"}`}
        />
      ) : (
        <span className="w-2 h-2 rounded-full animate-ping delay-500 bg-primary" />
      )}
      <span className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70">
        {badgeText}
      </span>
    </div>
  );
};

export default BadgeComponent;
