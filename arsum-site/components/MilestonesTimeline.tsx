"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    emoji: "🚀",
    date: "Feb '25",
    title: "Technical Resident",
    description: "Codepath Intermediate TIP Spring 2025",
  },
  {
    emoji: "🧠",
    date: "Oct '24",
    title: "AI Engineer",
    description: "Converging Research, Full Stack, and Infra into AI Projects",
  },
  {
    emoji: "📈",
    date: "Sep '23",
    title: "Silicon Valley Intern",
    description: "SWE Intern @ LEF, 1 of 13 selected in domestic program",
  },
  {
    emoji: "🧑‍🎓",
    date: "Mar '23",
    title: "First Internship",
    description: "Awarded Pomona College Honors & PCIP award for Data work @ Inabia",
  },
  {
    emoji: "💼",
    date: "Jan '22",
    title: "PAYS Math Mentor",
    description: "Helped underprivileged students from SoCal into Top US universities",
  },
  {
    emoji: "🏔️",
    date: "Jul '20",
    title: "First Trek",
    description: "3 Day 4 Night trek through Ayubia National Park, Pakistan",
  },
  {
    emoji: "📚",
    date: "Jun '20",
    title: "Mukhtar Mai Volunteer",
    description: "Raised 200+ books to build library at remote girls school",
  },
  {
    emoji: "🏆",
    date: "Apr '20",
    title: "National Distinction",
    description: "1st in Sciences, 1 of 2 with 2400 in SAT Subject, Top 50 Mathematicians",
  },
  {
    emoji: "🖥",
    date: "Aug '19",
    title: "First STEM School",
    description: "10 day bootcamp - designed B2 Bomber prototype",
  },
];

export default function MilestonesTimeline() {
  // Reverse milestones so oldest is on the left (start of journey)
  const reversedMilestones = [...milestones].reverse();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Vertical timeline for mobile */}
      <div className="md:hidden relative max-w-2xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

        <div className="space-y-8">
          {reversedMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-start gap-6 ml-20"
            >
              <div className="absolute -left-20 top-0">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-background"
                >
                  {milestone.emoji}
                </motion.div>
              </div>

              <div className="flex-1 p-4 rounded-lg bg-depth-1 border-2 border-depth-3">
                <div className="text-sm text-primary font-bold mb-1">{milestone.date}</div>
                <h3 className="text-xl font-display font-bold mb-1">{milestone.title}</h3>
                <p className="text-sm text-foreground/70">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop horizontal zigzag layout - left to right */}
      <div className="hidden md:block relative py-16">
        <div className="w-full mx-auto relative" style={{ minHeight: '700px' }}>
          {/* Curved zigzag path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d={reversedMilestones.map((_, index) => {
                const isUp = index % 2 === 0;
                // Spread from 5% to 95% to ensure all items are visible
                const x = (index / (reversedMilestones.length - 1)) * 900 + 50;
                const y = isUp ? 75 : 25;

                if (index === 0) {
                  return `M ${x} ${y}`;
                }

                // Previous point
                const prevIsUp = (index - 1) % 2 === 0;
                const prevX = ((index - 1) / (reversedMilestones.length - 1)) * 900 + 50;
                const prevY = prevIsUp ? 75 : 25;

                // Create smooth S-curve using cubic bezier
                const midX = (prevX + x) / 2;
                const control1X = prevX + (midX - prevX) * 0.7;
                const control1Y = prevY;
                const control2X = x - (x - midX) * 0.7;
                const control2Y = y;

                return ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${x} ${y}`;
              }).join('')}
              stroke="url(#zigzagGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Milestones positioned along zigzag */}
          <div className="relative w-full" style={{ height: '650px' }}>
            {reversedMilestones.map((milestone, index) => {
              const isTop = index % 2 === 0;
              // Match the path calculation - 5% to 95% spread to ensure all items visible
              const leftPosition = (index / (reversedMilestones.length - 1)) * 90 + 5;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="absolute"
                  style={{
                    left: `${leftPosition}%`,
                    top: isTop ? '5%' : 'auto',
                    bottom: isTop ? 'auto' : '5%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {/* Content card */}
                  <div className={`mb-6 ${!isTop && 'mt-6'}`}>
                    <div className="w-44 xl:w-52 p-3 rounded-lg bg-depth-1 border-2 border-depth-3 hover:border-primary/50 transition-all duration-300">
                      <div className="text-xs text-primary font-bold mb-1 text-center">
                        {milestone.date}
                      </div>
                      <h3 className="text-xs xl:text-sm font-display font-bold mb-1 text-center leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-[10px] xl:text-xs text-foreground/70 text-center line-clamp-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Emoji node */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center text-2xl shadow-xl border-4 border-background cursor-pointer relative z-10"
                    >
                      {milestone.emoji}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
