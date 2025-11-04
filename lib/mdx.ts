import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectMeta {
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
}

export interface ProjectData {
  slug: string;
  meta: ProjectMeta;
  content: string;
}

export function getAllProjectSlugs() {
  try {
    const files = fs.readdirSync(projectsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading projects directory:", error);
    return [];
  }
}

export function getProjectBySlug(slug: string): ProjectData | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      meta: data as ProjectMeta,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getAllProjects(): ProjectData[] {
  const slugs = getAllProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectData => project !== null)
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
}
