import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Codechef",
      icon: web,
      link : "https://www.codechef.com/users/mitu18patil"
    },
    {
      title: "Leetcode",
      icon: mobile,
      link : "https://leetcode.com/mitu18patil/"
    },
    {
      title: "Github",
      icon: backend,
      link : "https://github.com/mitupatil18"
    },
    {
      title: "GeeksForGeeks",
      icon: creator,
      link : "https://auth.geeksforgeeks.org/user/mitupatil39"
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Walchand College of Engineering , Sangli",
      company_name: "WCE",
      date: "2021-Present",
      points: [
        "CGPA - 8.6 TILL 4TH SEM"
      ],
    },
    {
      title: "Sangameshwar College, Solapur",
      company_name: "SC",
      date: "2019-2021",
      points: [
        "HSC - 94.33%",
        "JEE - 96.25%ile",
        "MHT-CET - 98.75%ile "
      ],
    },
    {
      title: "Saint Thomas English Medium High School",
      company_name: "STEMS",
      date: "2007-2019",
      points: [
          "CISCE - 94.4%",
          "ALL INDIA TOPPER 2019 IN COMPUTER APPLICATIONS(JAVA)",
          "5 TIMES AWARDED AS STUDENT ICON OF MONTH"
      ],
    }

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Quiz App",
      description:
        "Customize your quiz experience! Select category, set difficulty, and enjoy dynamic questions from OpenAPI. Track your score for a personalized challenge!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "openapi",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mitupatil18/Quiz-With-Api",
    },
    {
      name: "3-D Portfolio",
      description:
        "A 3-D portfolio website that uses animation and creates a dynamic environment. The website showcases about my skills and projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "reactthreefiber",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mitupatil18/3-D-Portfolio",
    },
    {
      name: "Trip Guide",
      description:
        "A full stack website with the fusion of Fronted Frameworks, Databases and Spring boot backend........Coming Soon",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };