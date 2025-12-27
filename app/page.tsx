"use client";

import { useState } from "react";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProfileSummary from "@/components/ProfileSummary";
import projectsData from "@/data/projects.json";
import profileData from "@/data/profile.json";

export default function ProductsPage() {
  const jobs = projectsData.filter((project: any) => project.type === "job");
  const projects = projectsData.filter((project: any) => project.type === "project");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <Section>
          {/* Professional Summary */}
          <ProfileSummary {...profileData} />

          {/* Clickable tabs - now more subtle */}
          <div className="mb-12 flex justify-center gap-8 mt-16">
            <button
              onClick={() => scrollToSection("jobs")}
              className="text-2xl md:text-3xl font-body font-semibold hover:text-primary transition-colors border-b-2 border-black dark:border-white hover:border-primary pb-1"
            >
              Experience
            </button>
            <span className="text-2xl md:text-3xl font-body font-semibold text-foreground/50 dark:text-foreground/30">&</span>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-2xl md:text-3xl font-body font-semibold hover:text-primary transition-colors border-b-2 border-black dark:border-white hover:border-primary pb-1"
            >
              Projects
            </button>
          </div>

          {/* Jobs Section */}
          <div id="jobs" className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Experience</h2>
            <ExperienceTimeline experiences={jobs} />
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project: any) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  summary={project.summary}
                  slug={project.slug}
                  cover={project.cover}
                  tags={project.tags}
                  type={project.type}
                  links={project.links}
                  impact={project.impact}
                  stack={project.stack}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
