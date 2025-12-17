import type React from "react";
interface StatusBadgeProps {
  children: React.ReactNode;
}

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium mb-6">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
      {children}
    </div>
  );
}
