import Link from "next/link";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ILinkNavigationProps {
  linkText?: string;
  redirectPath?: string;
  IconLink?: LucideIcon;
  linkClassName?: string;
  linkIconClassName?: string;
}
const LinkNavigation = ({
  IconLink,
  linkText,
  redirectPath,
  linkClassName,
  linkIconClassName,
}: ILinkNavigationProps) => {
  const hasLabelIcon = IconLink && linkText;
  return (
    <Link href={redirectPath as string} className={linkClassName}>
      <span
        className={`capitalize ${hasLabelIcon && "flex items-center gap-2"}`}
      >
        {IconLink && <IconLink className={`w-5 h-5 ${linkIconClassName} `} />}
        {linkText}
      </span>
    </Link>
  );
};

export default LinkNavigation;
