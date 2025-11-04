"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

interface Experience {
  title: string;
  slug: string;
  dateRange?: string;
  summary: string;
  impact: string[];
  stack: string[];
  cover: string;
  tags: string[];
  links?: {
    demo?: string;
    repo?: string;
    video?: string;
  };
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const isVideo = (cover: string) => cover.endsWith(".mp4") || cover.endsWith(".webm");
  const usePlaceholder = (cover: string) => !cover || cover.endsWith("-placeholder");

  const getGradientColor = (tags: string[]) => {
    if (tags.includes("AI") || tags.includes("ML")) {
      return "bg-gradient-to-br from-blue-600 to-purple-600";
    } else if (tags.includes("Web") || tags.includes("Full-stack")) {
      return "bg-gradient-to-br from-cyan-600 to-blue-600";
    } else if (tags.includes("Data Science") || tags.includes("NLP")) {
      return "bg-gradient-to-br from-green-600 to-teal-600";
    }
    return "bg-gradient-to-br from-orange-600 to-red-600";
  };

  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative flex gap-8 mb-12 last:mb-0"
        >
          {/* Timeline */}
          <div className="relative flex flex-col items-center flex-shrink-0 w-32">
            {/* Date at top */}
            {exp.dateRange && (
              <div className="text-sm font-bold text-foreground/70 mb-6 w-full text-right pr-4">
                {exp.dateRange}
              </div>
            )}

            {/* Spacer to push dot to center */}
            <div className="flex-1 relative">
              {/* Timeline Line - Always extends upward from dot */}
              <div className="w-1 bg-primary/30 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full" />
            </div>

            {/* Timeline Dot - Centered */}
            <div className="w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10 relative" />

            {/* Spacer to push dot to center */}
            <div className="flex-1 relative">
              {/* Timeline Line - Connecting to next dot (extends through gap) */}
              {index < experiences.length - 1 && (
                <div className="w-1 bg-primary/30 absolute top-0 left-1/2 transform -translate-x-1/2" style={{ height: 'calc(100% + 3rem)' }} />
              )}
            </div>
          </div>

          {/* Content Card */}
          <div className="flex-1 !bg-[#121212] !border-[#2b2b2b] !text-white rounded-lg border shadow-lg overflow-hidden mb-8">
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {/* Left: Image */}
              <div className="relative h-48 md:h-auto bg-[#1a1a1a] rounded-lg overflow-hidden">
                {usePlaceholder(exp.cover) ? (
                  <div className={`w-full h-full ${getGradientColor(exp.tags)} flex items-center justify-center`}>
                    {exp.tags.includes("AI") || exp.tags.includes("ML") ? (
                      <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ) : exp.tags.includes("Web") ? (
                      <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    ) : (
                      <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                  </div>
                ) : isVideo(exp.cover) ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src={exp.cover} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={exp.cover}
                    alt={exp.title}
                    fill
                    className={exp.cover.includes("twitter") ? "object-cover" : "object-contain bg-[#1a1a1a]"}
                  />
                )}
              </div>

              {/* Middle: Content */}
              <div className="md:col-span-2 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {exp.title}
                </h3>

                <p className="text-gray-300 mb-4">{exp.summary}</p>

                {/* Impact */}
                {exp.impact && exp.impact.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-primary uppercase mb-2">Key Impact</h4>
                    <ul className="space-y-1">
                      {exp.impact.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button asChild variant="default" size="sm">
                    <Link href={`/products/${exp.slug}`}>
                      <FileText className="w-4 h-4 mr-2" />
                      View Experience
                    </Link>
                  </Button>

                  {exp.links?.demo && (
                    <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <a href={exp.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Website
                      </a>
                    </Button>
                  )}

                  {!exp.links?.demo && exp.links?.repo && (
                    <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <a href={exp.links.repo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
