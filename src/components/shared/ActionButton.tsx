import { Button } from "../ui/button";
import { IActionButtonProps } from "@/types";
import { Loader } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const ActionButton = ({
  Icon,
  label,
  onClick,
  btnClassName,
  varieant = "default",
  labelClassName,
  iconClassName = "",
  btnType = "button",
  disabled = false,
  loading = false,
  showLaodingText = false,
  size = "default",
}: IActionButtonProps) => {
  const hasLabelIcon = label && Icon;
  return (
    <Button
      size={size}
      type={btnType}
      variant={varieant}
      className={`${cn(btnClassName)} ${
        hasLabelIcon && "flex items-center gap-2"
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
          {Icon && <Icon className={`size-5 ${iconClassName}`} />}
          {label && (
            <span
              className={`capitalize ${cn(
                "font-[400] text-base",
                labelClassName
              )}`}
            >
              {label}
            </span>
          )}
        </>
      )}
    </Button>
  );
};

export default ActionButton;
