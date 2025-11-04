"use client";

import { motion } from "framer-motion";

interface SkillsFilterProps {
  skills: string[];
  selectedSkill: string | null;
  onSkillClick: (skill: string | null) => void;
}

export default function SkillsFilter({ skills, selectedSkill, onSkillClick }: SkillsFilterProps) {
  // Categorize skills
  const categories: Record<string, string[]> = {
    "Languages": ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
    "Cloud & Infrastructure": ["Docker", "AWS (EC2 / S3)", "Google Cloud Functions", "PostgreSQL", "Pandas", "Data Pipelines", "Database Indexing"],
    "AI & ML": ["Prompt Engineering", "Function Calling", "TensorFlow", "NLP", "Claude Code", "Cursor"],
    "Frameworks & Tools": ["Next.js", "React", "FastAPI", "REST APIs", "Streamlit", "Playwright RPA"],
    "Product": ["Product-Led Growth", "A/B Testing", "Roadmapping", "User Research", "Data Visualization", "Agile Workflow", "Usage Based Billing", "Press Release", "Product Launch", "Product Lifecycle Journey", "Customer Satisfaction"]
  };

  // Categorize all skills
  const categorizedSkills: Record<string, string[]> = {
    "Languages": [],
    "Cloud & Infrastructure": [],
    "AI & ML": [],
    "Frameworks & Tools": [],
    "Product": []
  };

  skills.forEach(skill => {
    for (const [category, skillList] of Object.entries(categories)) {
      if (skillList.includes(skill)) {
        categorizedSkills[category].push(skill);
        break;
      }
    }
  });

  let skillIndex = 0;

  return (
    <div className="mb-12">
      <h3 className="text-sm font-bold text-foreground/60 uppercase mb-6 text-center">
        Filter by Skill
      </h3>
      <div className="space-y-3">
        {Object.entries(categorizedSkills).map(([category, categorySkills]) => {
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="flex gap-4 items-start">
              <h4 className="text-base font-extrabold text-foreground uppercase pt-2 w-[240px] tracking-wide">
                {category}:
              </h4>
              <div className="flex flex-wrap gap-2 flex-1">
                {categorySkills.map((skill) => {
                  const index = skillIndex++;
                  return (
                    <motion.button
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      onClick={() => onSkillClick(selectedSkill === skill ? null : skill)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                        selectedSkill === skill
                          ? "bg-primary text-black shadow-lg scale-105"
                          : "bg-depth-2 text-foreground/70 hover:bg-depth-3 hover:scale-105"
                      }`}
                    >
                      {skill}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {selectedSkill && (
        <div className="text-center mt-4">
          <button
            onClick={() => onSkillClick(null)}
            className="text-sm text-primary hover:underline"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
