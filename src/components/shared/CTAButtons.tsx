"use client";

import ActionButton from "./ActionButton";
import { IActionButtonProps } from "@/types";
import { LucideIcon } from "lucide-react";
import React from "react";
import { SignUpButton } from "@clerk/nextjs";

interface ICallToActionButtonsProps extends IActionButtonProps {
  text?: string;
  callToActionICon?: LucideIcon;
  callClassName?: string;
  callSize?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}
const CallToActionButtons = ({
  text,
  callToActionICon,
  callClassName,
  callSize,
  varieant = "default",
  iconClassName,
}: ICallToActionButtonsProps) => {
  return (
    <SignUpButton>
      <ActionButton
        label={text}
        Icon={callToActionICon}
        btnClassName={callClassName}
        size={callSize}
        varieant={varieant}
        iconClassName={iconClassName}
      />
    </SignUpButton>
  );
};

export default CallToActionButtons;
