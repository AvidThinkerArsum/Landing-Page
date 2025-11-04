"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  metric: string;
  description: string;
  image?: string;
  link?: string;
  index: number;
}

export default function TimelineItem({
  title,
  metric,
  description,
  image,
  link,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  const content = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-6 items-center"
    >
      {/* Image */}
      {image && (
        <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden bg-depth-2 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <div className="inline-block px-3 py-1 mb-3 text-sm font-bold bg-primary/20 text-primary rounded-full">
          {metric}
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="block p-6 rounded-lg bg-depth-1 hover:bg-depth-2 transition-colors border border-depth-3 hover:border-primary/50"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="p-6 rounded-lg bg-depth-1 border border-depth-3">
      {content}
    </div>
  );
}
