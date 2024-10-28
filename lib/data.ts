import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/portfolio-website.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "schooling",
    location: "basti UP india",
    description: "i studied PCM in 12th with computer",
    icon: React.createElement(LuGraduationCap),
    date: "graduate 2022",
  },
  {
    title: "college",
    location: "Lucknow UP india",
    description: "i did my graduation degree in BCA",
    icon: React.createElement(CgWorkAlt),
    date: "graduate 2026",
  },
  {
    title: "projects",
    location: "lucknow",
    description: "with my studies i did side projects",
    icon: React.createElement(FaReact),
    date: "- present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio website",
    description:
      "I worked on this portfolio website using React, Next.js and Tailwind. It has a dark mode and is mobile responsive.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: portfolioImg,
  },
  {
    title: "clothing store database",
    description:
      "i made a database for a clothing store using SQL and java.",
    tags: ["java","MYSQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "online book store ",
    description:
      "A web app for purchasing books",
    tags: ["java" , "MYSQL", "HTML", "CSS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "MySQL",
  "Time Management",
  "Cross Functional coordination",
  "Problem Solving",
  "Team Leadership",
  "Operations Management",
  "Project Management",
  "Prompt Engineering",
] as const;
