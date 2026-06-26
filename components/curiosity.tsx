"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaLightbulb } from "react-icons/fa";

export default function Curiosity() {
  const { ref } = useSectionInView("Curiosity", 0.5);

  return (
    <section
      ref={ref}
      id="curiosity"
      className="scroll-mt-28 mb-28 text-center sm:mb-40 max-w-[45rem]"
    >
      <SectionHeading>My Philosophy</SectionHeading>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-xl pointer-events-none"></div>

        <div className="flex justify-center items-center gap-2 mb-6">
          <FaLightbulb className="text-yellow-500 text-2xl animate-pulse" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Certified Knowledge Junkie
          </h3>
        </div>

        <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-8 text-lg">
          I am a deeply curious character who loves gaining knowledge by any means possible. 
          Whether it is through software engineering, business analytics, academic research, devouring books, or strategic chess battles, 
          I have an insatiable drive to learn and understand the mechanics of the world.
        </p>

        <div className="relative bg-gray-50 dark:bg-white/5 rounded-xl p-6 border-l-4 border-purple-500 text-left mb-8 shadow-inner">
          <FaQuoteLeft className="absolute top-4 right-4 text-gray-200 dark:text-white/5 text-4xl pointer-events-none" />
          <p className="text-xl italic font-serif text-gray-700 dark:text-white/80 leading-relaxed relative z-10 pr-6">
            "the more you know the more you realize that you do not know"
          </p>
          <span className="block mt-2 text-sm text-gray-500 dark:text-white/40 font-semibold text-right pr-6">
            — Socrates
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block bg-purple-100 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 rounded-full px-6 py-2 shadow-sm"
        >
          <p className="text-purple-700 dark:text-purple-300 font-medium">
            And that humility is exactly what makes me the{" "}
            <span className="font-bold underline decoration-wavy decoration-purple-500">
              "dumbest man alive."
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
