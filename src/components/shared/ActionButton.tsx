import { Loader, LucideIcon } from "lucide-react";

import { Button } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils";

interface IActionButtonProps {
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
}

const ActionButton = ({
  Icon,
  label,
  onClick,
  btnClassName,
  varieant = "default",
  labelClassName,
  iconClassName,
  btnType = "button",
  disabled = false,
  loading = false,
  showLaodingText = false,
}: IActionButtonProps) => {
  return (
    <Button
      type={btnType}
      variant={varieant}
      className={`${cn(btnClassName)} ${
        Icon && label && "flex items-center gap-2"
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          {showLaodingText && <span>Loading...</span>}
          <Loader className="animate-spin size-5" />
        </div>
      ) : (
        <>
          {Icon && <Icon className={` ${cn("size-5", iconClassName)}`} />}
          {label && (
            <span className={`${cn("font-[400] text-base", labelClassName)}`}>
              {label}
            </span>
          )}
        </>
      )}
    </Button>
  );
};

export default ActionButton;
