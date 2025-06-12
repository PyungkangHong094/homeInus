"use client";

import * as React from "react";
import { X } from "lucide-react";

export interface ToastActionElement {
  altText?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface ToastProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  variant?: "default" | "destructive";
  children?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant = "default",
      title,
      description,
      action,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col items-start gap-1 overflow-hidden rounded-md border bg-white p-4 pr-8 shadow-lg transition-all ${
          variant === "destructive"
            ? "border-red-500 bg-red-50"
            : "border-gray-200"
        } ${className}`}
        {...props}
      >
        <div className="grid gap-1">
          {title && (
            <div
              className={`text-sm font-semibold ${
                variant === "destructive" ? "text-red-900" : "text-gray-900"
              }`}
            >
              {title}
            </div>
          )}
          {description && (
            <div
              className={`text-sm opacity-90 ${
                variant === "destructive" ? "text-red-800" : "text-gray-600"
              }`}
            >
              {description}
            </div>
          )}
        </div>
        {action && (
          <div className="flex items-center justify-center rounded-sm px-3 py-2 text-xs font-medium transition-colors">
            {action.children}
          </div>
        )}
        <button
          className="absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-70 transition-opacity hover:opacity-100"
          onClick={() => onOpenChange?.(false)}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
);

Toast.displayName = "Toast";

export { Toast };
