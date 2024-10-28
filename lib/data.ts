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
    title: "---",
    location: "---",
    description: "---",
    icon: React.createElement(LuGraduationCap),
    date: "---",
  },
  {
    title: "----",
    location: "----",
    description: "---",
    icon: React.createElement(CgWorkAlt),
    date: "----",
  },
  {
    title: "---",
    location: "---",
    description: "---",
    icon: React.createElement(FaReact),
    date: "---",
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
    title: "---",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
