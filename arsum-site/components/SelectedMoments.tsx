"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const moments = [
  {
    image: "/images/firstday.jpeg",
    title: "First Day as an AI Engineer",
    link: "https://www.linkedin.com/posts/arsum_hey-linkedin-fam-im-thrilled-to-share-activity-7349309979834658821-80Nm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADW2FnwBrhilIdyEaUms0o3Cq5I66EwHkvg",
  },
  {
    image: "/images/presenting.jpeg",
    title: "Thesis Talk",
    link: "https://www.linkedin.com/posts/arsum_last-friday-i-had-the-honor-of-delivering-activity-7296004428849983488-jzkk",
  },
  {
    image: "/images/SVP_1.png",
    title: "Intern - Silicon Valley",
    link: "https://www.linkedin.com/posts/arsum_hello-linkedin-community-im-thrilled-to-activity-7101104330228830209-KuxP",
  },
  {
    image: "/images/With_Richard.png",
    title: "Networked a Multimillionaire",
    link: "",
  },
  {
    image: "/images/Techcrunch.png",
    title: "TechCrunch SF 2023",
    link: "https://www.linkedin.com/posts/arsum_techcrunchdisrupt2023-networking-techinnovation-activity-7109580979593232385-SON-",
  },
  {
    image: "/images/MB.png",
    title: "Talking AI @ Headstarter",
    link: "https://www.linkedin.com/posts/arsum_brain-tumor-classification-project-overview-activity-7279847572821716992-OZBR",
  },
];

export default function SelectedMoments() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check scroll position to determine if we can scroll left/right
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollContainerRef.current || !isHovering) return;

      const container = scrollContainerRef.current;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const containerWidth = rect.width;

      // Define edge zones (30% from each side)
      const edgeZone = containerWidth * 0.3;

      // Scroll speed
      const maxScrollSpeed = 15;

      // Show arrows based on cursor position and scroll availability
      if (mouseX < edgeZone && canScrollLeft) {
        setShowLeftArrow(true);
        setShowRightArrow(false);
        // Scroll left
        const intensity = 1 - mouseX / edgeZone;
        container.scrollLeft -= maxScrollSpeed * intensity;
      } else if (mouseX > containerWidth - edgeZone && canScrollRight) {
        setShowLeftArrow(false);
        setShowRightArrow(true);
        // Scroll right
        const intensity = (mouseX - (containerWidth - edgeZone)) / edgeZone;
        container.scrollLeft += maxScrollSpeed * intensity;
      } else {
        setShowLeftArrow(false);
        setShowRightArrow(false);
      }

      checkScrollPosition();
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, canScrollLeft, canScrollRight]);

  // Check scroll position on mount and scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener("scroll", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => {
          setIsHovering(true);
          checkScrollPosition();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setShowLeftArrow(false);
          setShowRightArrow(false);
        }}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-6 px-2 min-w-max py-2">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer overflow-hidden rounded-lg group flex-shrink-0"
              style={{ width: "500px", height: "500px", minHeight: "500px", maxHeight: "500px" }}
              onClick={() => {
                if (moment.link) {
                  window.open(moment.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-center font-bold text-xl px-4">
                  {moment.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Arrow indicators */}
      <AnimatePresence>
        {showLeftArrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none z-10"
          >
            <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center shadow-2xl">
              <ChevronLeft className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        )}

        {showRightArrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-10"
          >
            <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center shadow-2xl">
              <ChevronRight className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
