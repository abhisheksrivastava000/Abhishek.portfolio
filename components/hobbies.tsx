"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { hobbiesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Hobbies() {
  const { ref } = useSectionInView("Hobbies", 0.5);

  return (
    <section ref={ref} id="hobbies" className="scroll-mt-28 mb-28 text-center sm:mb-40">
      <SectionHeading>My Hobbies & Interests</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[62rem] px-4">
        {hobbiesData.map((hobby, index) => {
          return (
            <HobbyCard key={index} index={index} {...hobby} />
          );
        })}
      </div>
    </section>
  );
}

type HobbyCardProps = (typeof hobbiesData)[number] & { index: number };

function HobbyCard({ title, description, icon, index }: HobbyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * idx,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      whileHover={{ scale: 1.04, y: -5 }}
      className="group flex flex-col justify-between bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-white/5 dark:border-white/10 dark:text-white"
    >
      <div>
        <div className="text-4xl mb-4 bg-gray-100 dark:bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed text-center">
          {description}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-[0.8rem] font-medium tracking-wide uppercase text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
        Featured Hobby
      </div>
    </motion.div>
  );
}
