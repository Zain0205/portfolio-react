import htmllogo from "./assets/img/htmllogo.png";
import csslogo from "./assets/img/csslogo.png";
import jslogo from "./assets/img/jslogo.png";
import bootstraplogo from "./assets/img/bootstraplogo.png";
import tailwindlogo from "./assets/img/tailwindlogo.png";
import reactlogo from "./assets/img/reactlogo.png";
import vuelogo from "./assets/img/vuelogo.png";

import gitlogo from "./assets/img/gitlogo.png";
import vscodelogo from "./assets/img/vscodelogo.png";
import githublogo from "./assets/img/githublogo.png";
import npmlogo from "./assets/img/npmlogo.png";

import project1 from "./assets/img/project.png";
import project2 from "./assets/img/project2.png";
import project3 from "./assets/img/project3.png";
import project4 from "./assets/img/project4.png";

export const projects = [
  {
    id: 1,
    img: project1,
    title: "Netflix Clone",
    description: `I made a web application that is similar to the Netflix website. This website was made with a responsive design so that the user experience is better. This website was created using reactjs and tailwindcss. This application utilizes the API from TMD (The Movie Database)`,
    link: "https://github.com/Zain0205/netflix-clone",
  },
  {
    id: 2,
    img: project2,
    title: "Weather App",
    description:"In this project I created a weather application using React.js and Tailwindcss by utilizing the openweathermap api. This application allows users to search and display current and future weather forecasts for a specified location. With a clean and responsive display, users can easily obtain information about temperature, humidity, wind speed and other weather conditions.",
    link: "https://github.com/Zain0205/weather-app",
  },
  {
    id: 3,
    img: project3,
    title: "Quix App",
    description: "In this project I created a simple quiz application using React.js and Tailwindcss, displaying a variety of interesting quiz questions in a limited time.",
    link: "https://github.com/Zain0205/quiz-app",
  },
  {
    id: 4,
    img: project4,
    title: "Contact List",
    description: "In this project I created a contact list website using Vue 3 with responsive design, this website can store a person's name, phone number and email",
    link: "https://github.com/Zain0205/contact-list-program",
  },
];

export const tools = [
  {
    id: 1,
    img: vscodelogo,
    title: "VS Code",
    level: "Intermediate",
  },
  {
    id: 2,
    img: gitlogo,
    title: "Git",
    level: "Beginner",
  },
  {
    id: 3,
    img: githublogo,
    title: "Github",
    level: "Beginner",
  },
  {
    id: 4,
    img: npmlogo,
    title: "NPM",
    level: "Beginner",
  },
];

export const skills = [
  {
    id: 1,
    img: htmllogo,
    title: "HTML",
    level: "Intermediate",
  },
  {
    id: 2,
    img: csslogo,
    title: "CSS",
    level: "Intermediate",
  },
  {
    id: 3,
    img: jslogo,
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    id: 4,
    img: bootstraplogo,
    title: "Bootsrap",
    level: "Beginner",
  },
  {
    id: 5,
    img: tailwindlogo,
    title: "TailwindCSS",
    level: "Intermediate",
  },
  {
    id: 6,
    img: reactlogo,
    title: "React.js",
    level: "Beginner",
  },
  {
    id: 7,
    img: vuelogo,
    title: "Vue.js",
    level: "Beginner",
  },
];

export const educations = [
  {
    id: 1,
    instasi: "Universitas Esa Unggul Jakarta",
    jurusan: "Teknik Informatika",
    tahun: "2023 - Present",
  },
  {
    id: 2,
    instasi: "SMA Negeri 79 Jakarta",
    jurusan: "IPA",
    tahun: "2020-2023",
  },
  {
    id: 3,
    instasi: "SMP Negeri 58 Jakarta",
    jurusan: "Belum ada",
    tahun: "2017 - 2020",
  },
  {
    id: 4,
    instasi: "SD Laboratorium PGSD FIP UNJ",
    jurusan: "Belum Ada",
    tahun: "2011 - 2017",
  },
];

export const navbarListItems = [
  { id: 1, list: "Home", sectionId: "#home" },
  {
    id: 2,
    list: "About",
    sectionId: "#about",
  },
  {
    id: 6,
    list: "Education",
    sectionId: "#edu",
  },
  {
    id: 3,
    list: "Skils",
    sectionId: "#skills",
  },
  {
    id: 4,
    list: "Projects",
    sectionId: "#projects",
  },
  {
    id: 5,
    list: "Contact",
    sectionId: "#contact",
  },
];
