"use client";

import { useState } from "react";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsFilter from "@/components/SkillsFilter";
import projectsData from "@/data/projects.json";

const allTags = Array.from(
  new Set(projectsData.flatMap((project: any) => project.tags))
).sort();

const allSkills = Array.from(
  new Set(projectsData.flatMap((project: any) => project.skills || []))
);

export default function ProductsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const jobs = projectsData.filter((project: any) => project.type === "job");
  const projects = projectsData.filter((project: any) => project.type === "project");

  // Apply both tag and skill filters
  const filteredJobs =
    selectedTags.length === 0 && !selectedSkill
      ? jobs
      : jobs.filter((project: any) => {
          const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
          const matchesSkill = !selectedSkill || (project.skills && project.skills.includes(selectedSkill));
          return matchesTags && matchesSkill;
        });

  const filteredProjects =
    selectedTags.length === 0 && !selectedSkill
      ? projects
      : projects.filter((project: any) => {
          const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
          const matchesSkill = !selectedSkill || (project.skills && project.skills.includes(selectedSkill));
          return matchesTags && matchesSkill;
        });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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
          {/* Clickable tabs */}
          <div className="mb-12 flex justify-center gap-8">
            <button
              onClick={() => scrollToSection("jobs")}
              className="text-4xl md:text-5xl font-display font-bold hover:text-primary transition-colors border-b-2 border-black dark:border-white hover:border-primary pb-1"
            >
              Experience
            </button>
            <span className="text-4xl md:text-5xl font-display font-bold text-foreground/50 dark:text-foreground/30">&</span>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-4xl md:text-5xl font-display font-bold hover:text-primary transition-colors border-b-2 border-black dark:border-white hover:border-primary pb-1"
            >
              Projects
            </button>
          </div>

          {/* Skills filter */}
          <SkillsFilter
            skills={allSkills}
            selectedSkill={selectedSkill}
            onSkillClick={setSelectedSkill}
          />

          {/* Jobs Section */}
          <div id="jobs" className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Experience</h2>
            {filteredJobs.length > 0 ? (
              <ExperienceTimeline experiences={filteredJobs} />
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground/60">
                  No experience found with the selected filters.
                </p>
              </div>
            )}
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: any) => (
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
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/60">
                  No projects found with the selected filters.
                </p>
              </div>
            )}
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
