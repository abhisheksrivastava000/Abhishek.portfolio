"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ssriabhi@gmail.com">
          ssriabhi@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <div className="mt-10 flex justify-center">
        <iframe
          src="https://tally.so/embed/3qvdj7"
          width="100%"
          height="500"
          frameBorder="0"
          title="Contact Form"
          className="rounded-lg borderBlack"
        ></iframe>
      </div>
    </motion.section>
  );
}
