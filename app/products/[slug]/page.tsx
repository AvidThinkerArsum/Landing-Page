import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import { MDXComponents, MDXLayout } from "@/components/MDXComponents";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Youtube } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.meta.title} | Arsum Chaudhary`,
    description: project.meta.problem,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        {/* Back button */}
        <Section>
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/products">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Link>
          </Button>

          {/* Links bar */}
          {(meta.links?.demo || meta.links?.repo || meta.links?.video) && (
            <div className="flex flex-wrap gap-4 mb-8">
              {meta.links.demo && (
                <Button asChild>
                  <a
                    href={meta.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {meta.links.repo && (
                <Button asChild variant="outline">
                  <a
                    href={meta.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {meta.links.video && (
                <Button asChild variant="outline">
                  <a
                    href={meta.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 w-4 h-4" />
                    Video
                  </a>
                </Button>
              )}
            </div>
          )}

          {/* MDX content */}
          <div className="max-w-4xl">
            <MDXLayout meta={meta}>
              <MDXRemote source={content} components={MDXComponents} />
            </MDXLayout>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
