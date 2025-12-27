"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, FileDown, Linkedin, Mail, Github } from "lucide-react";

interface ProfileSummaryProps {
  name: string;
  role: string;
  company: string;
  education: string;
  currentWork: string;
  profileSummary: string;
  photo: string;
  techStack: {
    [category: string]: string[];
  };
  achievements: string[];
  links: {
    resume: string;
    linkedin: string;
    github?: string;
    email: string;
  };
}

export default function ProfileSummary({
  name,
  role,
  company,
  education,
  currentWork,
  profileSummary,
  photo,
  techStack,
  achievements,
  links,
}: ProfileSummaryProps) {
  const pathname = usePathname();

  const handleEmailClick = (e: React.MouseEvent) => {
    if (pathname === "/about") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/about#contact";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-16"
    >
      <Card className="bg-background dark:bg-[#121212] border-border dark:border-[#2b2b2b] text-foreground dark:text-white overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Top Section: Image Left, Details Right */}
          <div className="grid md:grid-cols-[400px_1fr] gap-8 mb-10">
            {/* Profile Photo - Left Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </motion.div>

            {/* Details - Right Side */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
                {name}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-2">
                {role}
              </p>
              <p className="text-lg text-primary font-semibold mb-4">
                {company}
              </p>
              <p className="text-base text-foreground/70 mb-6">{education}</p>

              {/* Current Work - Single Line */}
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                {currentWork}
              </p>

              {/* Profile Summary - 2-3 Lines in Third Person */}
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {profileSummary}
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-primary/20 my-8"
          />

          {/* Technical Expertise - Below Picture */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
                Technical Expertise
              </h3>
            </div>
            <div className="space-y-3">
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category} className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-foreground/60 w-full md:w-auto md:min-w-[180px]">
                    {category}:
                  </span>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements - Below Technical Expertise */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span className="text-sm md:text-base text-foreground/80">
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 pt-4 justify-center"
          >
            <Button asChild size="lg" className="flex-1 sm:flex-initial">
              <Link href={links.resume} target="_blank" rel="noopener noreferrer">
                <FileDown className="w-4 h-4" />
                Download Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-initial">
              <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </Button>
            {links.github && (
              <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-initial">
                <Link href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
            )}
            <Button
              onClick={handleEmailClick}
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-initial"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
