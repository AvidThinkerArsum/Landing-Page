import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className,
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      <div className={cn(fullWidth ? "w-full" : "max-w-7xl mx-auto")}>
        {children}
      </div>
    </section>
  );
}
