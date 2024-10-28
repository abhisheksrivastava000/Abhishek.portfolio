# portfolio-website
Abhishek Srivastava | Portfolio Website

Welcome to my personal portfolio website! This project showcases my journey as a software developer, highlighting my skills, projects, and experience in the field of full-stack development.
Live Demo
here's a notion web page that conntains the portfolio
https://abhisheksrivastava.notion.site/Abhishek-Srivastava-10a7927502b680dfb0d1c38c9413807d
Table of Contents

    About the Project
    Technologies Used
    Features
    Installation and Setup
    Usage
    Contact

About the Project

This portfolio website is a fully responsive web application designed to present my work, technical skills, and career goals. Built using modern web technologies, the site serves as a digital resume and includes a contact form, downloadable CV, and links to my professional profiles.
Technologies Used

    Frontend Framework: Next.js
    Styling: Tailwind CSS
    Animations: Framer Motion
    Icons: React Icons
    Other Tools:
        React Context API (for managing the theme and section views)
        React Hot Toast (for notifications)

Features

    Dark/Light Theme Toggle: Users can switch between light and dark modes using a custom theme switch.
    Responsive Design: The website is fully responsive, ensuring a seamless experience on all devices.
    Contact Form: Users can reach out to me through the contact section.
    Dynamic Animations: Smooth animations are implemented using Framer Motion to enhance user experience.
    Downloadable CV: A direct link to download my latest CV.

Installation and Setup

To run this project locally, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/000-ghost-000/portfolio-website.git
cd portfolio-website

Install the dependencies:

bash

npm install

Start the development server:

bash

    npm run dev

    This will start the development server at http://localhost:3000.

Usage

To explore the website:

    Home: Introduction about me, with a quick overview of my skills and experience.
    Projects: A showcase of selected projects I’ve worked on, with links to GitHub repositories and live demos.
    Contact: A simple form that allows visitors to send me a message directly.

Folder Structure

```graphql

├── public # Static assets like images and favicon
├── src # Source code for the website
│ ├── components # Reusable components (Header, Footer, etc.)
│ ├── context # Context files for state management (theme, section views)
│ ├── pages # Next.js pages and routing
│ ├── styles # Global CSS and Tailwind configuration
│ └── lib # Custom hooks and utility functions
└── README.md # Documentation
```
