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
        I am a dedicated software developer who is smart and funny with a strong focus on
        backend and AI&ML. Proficient in languages like Java, Python,
        and Node.js, along with a foundational understanding of C and C++, I
        thrive in the IT sector, working on applications and software solutions.
        My passion for solving complex problems and being creative in my
        approach drives my commitment to testing and continuous learning. I
        approach each challenge by fully understanding its scope and
        intricacies, ensuring that I deliver thoughtful, high-quality solutions.
        My current career aspirations include advancing as a software developer,
        tester, or consultant, with a particular focus on software quality,
        security, and integrity. While I am confident in working independently,
        I also excel in team environments, coordinating effectively to achieve
        common goals. To stay at the forefront of industry trends, I actively
        engage with new technologies and leverage social media as a valuable
        tool for learning and growth.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, watching movies, web series. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
