import React from "react";

const BadgeComponent = ({ badgeText }: { badgeText: string }) => {
  return (
    <div className="pointer-events-none mx-auto md:mx-0 flex items-center justify-center w-fit lg:justify-start gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary backdrop-blur-lg">
      <span className="w-2 h-2 rounded-full animate-ping delay-500 bg-primary" />
      <span className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70">
        {badgeText}
      </span>
    </div>
  );
};

export default BadgeComponent;
