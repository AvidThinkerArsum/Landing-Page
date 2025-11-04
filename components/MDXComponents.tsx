import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-12 mb-4 text-4xl font-display font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 mb-4 text-3xl font-display font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-2xl font-display font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-6 mb-2 text-xl font-display font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 mb-4 text-foreground/80", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-7 text-foreground/80", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-primary pl-6 italic text-foreground/70",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-depth-2 px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-depth-1 p-4 border border-depth-3",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-8 border-depth-3", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-bold text-foreground", className)} {...props} />
  ),
  Image,
};

interface MDXLayoutProps {
  children: ReactNode;
  meta: {
    title: string;
    date: string;
    problem: string;
    solution: string;
    role: string;
    stack: string[];
    impact: string[];
    links?: {
      demo?: string;
      repo?: string;
      video?: string;
    };
  };
}

export function MDXLayout({ children, meta }: MDXLayoutProps) {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-12 pb-8 border-b border-depth-3">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          {meta.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-sm font-bold text-foreground/60 uppercase mb-2">
              Problem
            </h3>
            <p className="text-foreground/80">{meta.problem}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground/60 uppercase mb-2">
              Solution
            </h3>
            <p className="text-foreground/80">{meta.solution}</p>
          </div>
        </div>
      </div>

      {/* Impact callout */}
      <div className="mb-12 p-6 rounded-lg bg-primary/10 border border-primary/30">
        <h3 className="text-lg font-bold mb-4 text-primary">Key Impact</h3>
        <ul className="space-y-2">
          {meta.impact.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* MDX content */}
      {children}
    </article>
  );
}
