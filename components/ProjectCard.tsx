"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

interface ProjectCardProps {
  title: string;
  summary: string;
  slug: string;
  cover: string;
  tags: string[];
  type?: string;
  impact?: string[];
  stack?: string[];
  links?: {
    demo?: string;
    repo?: string;
    video?: string;
  };
}

export default function ProjectCard({
  title,
  summary,
  slug,
  cover,
  tags,
  type,
  impact,
  stack,
  links,
}: ProjectCardProps) {
  const isVideo = cover.endsWith(".mp4") || cover.endsWith(".webm");
  const usePlaceholder = !cover || cover.endsWith("-placeholder");

  // Generate color based on project type
  const getGradientColor = () => {
    if (tags.includes("AI") || tags.includes("ML") || tags.includes("Chatbot") || tags.includes("RAG")) {
      return "bg-gradient-to-br from-blue-600 to-purple-600";
    } else if (tags.includes("Web") || tags.includes("Full-stack") || tags.includes("Real-time") || tags.includes("Social")) {
      return "bg-gradient-to-br from-cyan-600 to-blue-600";
    } else if (tags.includes("Data Science") || tags.includes("NLP") || tags.includes("Visualization") || tags.includes("Analytics")) {
      return "bg-gradient-to-br from-green-600 to-teal-600";
    } else if (tags.includes("Automation") || tags.includes("RPA") || tags.includes("Billing")) {
      return "bg-gradient-to-br from-purple-600 to-pink-600";
    } else if (tags.includes("Developer Tools")) {
      return "bg-gradient-to-br from-indigo-600 to-blue-600";
    }
    return "bg-gradient-to-br from-orange-600 to-red-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors !bg-[#121212] !border-[#2b2b2b] !text-white">
        {/* Cover media */}
        <div className="relative h-60 w-full bg-[#1a1a1a] overflow-hidden group/cover">
          {usePlaceholder ? (
            <div className={`w-full h-full ${getGradientColor()} flex items-center justify-center`}>
              {tags.includes("AI") || tags.includes("ML") ? (
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ) : tags.includes("Web") || tags.includes("Full-stack") ? (
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              ) : tags.includes("Data Science") || tags.includes("NLP") ? (
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ) : (
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )}
            </div>
          ) : isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={cover} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={cover}
              alt={title}
              fill
              loading="lazy"
              className={cover.includes("twitter") ? "object-cover" : "object-contain bg-[#1a1a1a]"}
            />
          )}
          {/* Project icon/logo badge */}
          <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-primary/20">
            {tags.includes("AI") || tags.includes("ML") ? (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ) : tags.includes("Web") || tags.includes("Full-stack") ? (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            ) : tags.includes("Data Science") || tags.includes("NLP") ? (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300">{summary}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow space-y-4">
          {/* Impact Metrics - Show all */}
          {impact && impact.length > 0 && (
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold text-primary uppercase">Key Impact</h4>
              {impact.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          {stack && stack.length > 0 && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-medium bg-orange-500/20 text-orange-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link href={`/products/${slug}`}>
              <FileText className="w-4 h-4 mr-2" />
              {type === "job" ? "View Experience" : "View Project"}
            </Link>
          </Button>

          {links?.demo && (
            <Button asChild variant="outline" size="sm">
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {type === "job" ? "View Website" : "Live Demo"}
              </a>
            </Button>
          )}

          {!links?.demo && links?.repo && (
            <Button asChild variant="outline" size="sm">
              <a href={links.repo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
