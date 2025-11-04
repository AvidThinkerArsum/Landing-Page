import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SelectedMoments from "@/components/SelectedMoments";
import GivingBackSection from "@/components/GivingBackSection";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <Hero
        title="ARSUM CHAUDHARY"
        subtitle="AI Engineer & Product Builder"
        description="Turning ideas into systems that scale"
        backgroundVideo="/images/coder.mp4"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/products">
              View Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 border-2 border-white/20">
            <a href="/Product_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </Hero>

      {/* Featured Work */}
      <Section id="work" fullWidth className="bg-depth-1">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-8">
          {featuredProjects.map((project) => (
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
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Selected Moments Gallery */}
      <Section id="moments" fullWidth className="px-0">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center tracking-widest px-4">
          S E L E C T E D &nbsp; M O M E N T S
        </h2>
        <SelectedMoments />
      </Section>

      {/* Divider */}
      <div className="flex justify-center py-20">
        <div className="bg-black dark:bg-white" style={{width: '1.5px', height: '250px'}}></div>
      </div>

      {/* About Section */}
      <Section id="about" fullWidth>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center tracking-widest">
          A B O U T
        </h2>

        {/* About Me */}
        <div className="grid md:grid-cols-2 gap-0 items-center mb-12">
          <div className="px-8 md:px-12 lg:px-16 xl:px-24 py-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">About</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Arsum Chaudhary is an AI Engineer and Product Builder transforming ideas into production-grade systems that scale. He is the founding engineer at Pyq AI (YC W23), building AI-powered workflow automation that automates the back offices of insurance brokerages. His expertise spans machine learning, full-stack development, and infrastructure — shipping features from concept to production with measurable business impact.
            </p>
          </div>
          <div className="relative aspect-video md:aspect-auto md:h-[500px] overflow-visible flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Back Image */}
              <div className="absolute w-[280px] h-[350px] transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 rotate-[-8deg] left-[10%] top-[10%] cursor-pointer group">
                <img
                  src="/images/pic2.png"
                  alt="Arsum"
                  className="w-full h-full object-cover rounded-lg border-4 border-white shadow-2xl"
                />
              </div>

              {/* Front Image */}
              <div className="absolute w-[280px] h-[350px] transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 rotate-[8deg] right-[10%] bottom-[10%] cursor-pointer group z-10">
                <img
                  src="/images/2025-NadeemChaudhary_Arsum.jpeg"
                  alt="Arsum"
                  className="w-full h-full object-cover rounded-lg border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Early Life */}
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="order-2 md:order-1 relative aspect-video md:aspect-auto md:h-[380px] overflow-visible flex items-center justify-center p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Back Image */}
              <div className="absolute w-[280px] h-[350px] transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 rotate-[-8deg] left-[15%] top-[5%] cursor-pointer group">
                <img
                  src="/images/early1.jpg"
                  alt="Early Life"
                  className="w-full h-full object-cover rounded-lg border-4 border-white shadow-2xl"
                />
              </div>

              {/* Front Image */}
              <div className="absolute w-[280px] h-[350px] transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 rotate-[8deg] right-[15%] bottom-[5%] cursor-pointer group z-10">
                <img
                  src="/images/early2.jpg"
                  alt="Early Life"
                  className="w-full h-full object-cover rounded-lg border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 px-8 md:px-12 lg:px-16 xl:px-20 py-4">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Early Life</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Arsum was born on April 5, 2002, in Lahore, Pakistan. At 11, he taught himself Python by building 2D fighting games and Flappy Bird clones, developing an early understanding of systems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At 18, he applied to US colleges seeking a scholarship as an international student. He was rejected from all. A year later, he reapplied, earning a scholarship to Pomona College and moving to America at 19. During college, he joined the Silicon Valley Program, experiencing Bay Area startups firsthand. That led him to become the founding engineer at Pyq AI (YC W23).
            </p>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div className="flex justify-center py-20">
        <div className="bg-black dark:bg-white" style={{width: '1.5px', height: '250px'}}></div>
      </div>

      {/* My Identities */}
      <Section id="identities" fullWidth>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center italic">
          "Failing to prepare is preparing to fail"
        </h2>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center tracking-widest">
          M Y &nbsp; 3 &nbsp; I D E N T I T I E S
        </h2>

        {/* AI Product Engineer */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/images/talk.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">AI Product Engineer</h3>
            <p className="text-lg text-foreground/80 mb-6">
              <strong className="text-primary">Pyq AI (YC W23)</strong><br />
              AI Engineer building AI powered workflow automation solutions for the back offices of insurance brokerages
            </p>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/arsum/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* High Performance Coach */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">High Performer</h3>
            <p className="text-lg text-foreground/80 mb-6">
              <strong className="text-primary">Extreme Ownership</strong><br />
              Taking complete responsibility for outcomes and continuously striving to become the best version of myself through discipline and high-performance habits
            </p>
          </div>
          <div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/images/performancecoach.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* YouTuber */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/images/youtube.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">YouTuber</h3>
            <p className="text-lg text-foreground/80 mb-6">
              <strong className="text-primary italic">Documenting It All</strong><br />
              "Bringing all of our voices to the world through my Youtube Channel"
            </p>
            <Button asChild variant="outline">
              <a href="https://www.youtube.com/@arsum_nc" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div className="flex justify-center py-20">
        <div className="bg-black dark:bg-white" style={{width: '1.5px', height: '250px'}}></div>
      </div>

      {/* Giving Back Section */}
      <Section id="giving-back" fullWidth>
        <GivingBackSection />
      </Section>

      {/* Contact */}
      <Section id="contact" fullWidth>
        <ContactSection />
      </Section>
    </div>
  );
}
