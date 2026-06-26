"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a versatile hybrid of a tech-head and a business strategist—holding both a <span className="font-medium">BCA</span> and an <span className="font-medium">MBA in Business Analytics</span>. 
        That means I can build a complex database system in SQL/Python, and then present a slide deck explaining its ROI without putting you to sleep (unless you're into that sort of thing).
        I have a <span className="font-medium">natural nag for problem solving</span>—meaning I'll pester a bug or business inefficiency until it apologizes and fixes itself. I'm also told I'm quite <span className="font-medium">smart</span> and <span className="font-medium">funny</span> (my IDE certainly thinks my compiler errors are hilarious).
      </p>

      <p className="mb-3">
        Proficient in languages like <span className="font-medium">Java, Python, and Node.js</span>, along with a foundational understanding of C and C++, I thrive at the intersection of technical architecture and high-level project management.
        I approach each challenge by fully understanding its scope and intricacies, ensuring that I deliver thoughtful, high-quality, and secure solutions.
        I am equally comfortable writing robust code independently, leading cross-functional teams, or consulting on software quality and operations.
      </p>

      <p>
        <span className="italic">When I'm not coding or analyzing business data</span>, I enjoy reading books, watching movies & web series, devouring manga, and playing chess.
      </p>
    </motion.section>
  );
}
