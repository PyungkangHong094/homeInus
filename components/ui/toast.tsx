"use client";

import * as React from "react";

export interface ToastActionElement {
  altText?: string;
}

export interface ToastProps {
  className?: string;
  variant?: "default" | "destructive";
  children?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed bottom-4 right-4 z-50 flex w-full max-w-sm items-center justify-between space-x-4 overflow-hidden rounded-md border bg-white p-6 shadow-lg transition-all ${className}`}
        {...props}
      />
    );
  }
);
Toast.displayName = "Toast";

export { Toast };
