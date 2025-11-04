"use client";

import { motion } from "framer-motion";

export default function GivingBackSection() {
  return (
    <div className="w-full space-y-16">
      {/* Quote Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">
          "You give 3x of what you receive"
        </h2>
      </motion.div>

      {/* PAYS - Lead College Application Coach */}
      <div className="grid md:grid-cols-2 gap-0 items-center mb-16 bg-depth-2 rounded-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 lg:p-16"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Lead College Application Coach
          </h3>
          <p className="text-primary font-bold mb-6">
            Empowering Underrepresented Students at Pomona
          </p>

          <div className="space-y-4 text-lg text-foreground/80">
            <p className="leading-relaxed">
              Arsum led a team of coaches through Pomona's intensive equity mentorship program, guiding underrepresented high-school students through their college journeys. He created a Math and Music module that taught critical thinking through an unconventional lens.
            </p>
            <p className="leading-relaxed">
              He considers building these long-term mentoring relationships and teaching students high-performance habits as some of his most fulfilling work. The impact continues as these students pursue paths that once seemed impossible.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/pomona-college-academy-for-youth-success/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors mt-6"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/PAYS.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Mukhtar Mai Library */}
      <div className="grid md:grid-cols-2 gap-0 items-center bg-depth-2 rounded-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[500px] order-2 md:order-1"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/MukhtarMai.mov" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 lg:p-16 order-1 md:order-2"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Founder, Mukhtar Mai Library
          </h3>
          <p className="text-primary font-bold mb-6">
            Building Educational Resources in Pakistan
          </p>

          <div className="space-y-4 text-lg text-foreground/80">
            <p className="leading-relaxed">
              Inspired by Mukhtar Mai's courageous struggle to build schools after surviving a brutal attack—a story she shared in her book "In the Name of Honor"—Arsum raised and shipped books to establish a library at her remote girls' school in rural Pakistan.
            </p>
            <p className="leading-relaxed">
              What started as a book drive became a mission to support Mai's vision of creating educational opportunities where they were once denied. This library stands as a gateway to knowledge for young women pursuing paths that seemed impossible.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
