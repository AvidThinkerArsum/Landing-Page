import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AvidThinkerArsum",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/arsum",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/arsum",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@arsum_nc",
      icon: Youtube,
    },
  ];

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-black dark:border-white/20"></div>
        <div className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name and tagline */}
          <div className="text-center md:text-left">
            <Link href="/">
              <h3 className="text-xl font-display font-bold cursor-pointer hover:text-primary transition-colors">
                Arsum Chaudhary
              </h3>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
