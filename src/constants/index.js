import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  psql,
  cospi,
  weathermap,
  idfrog,
  portfolio,
  oclock,
  psa,
  poleemploi,
  github,
  recoil
} from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: {
      fr:"A propos",
      en: "About"}
  },
  {
    id: "work",
    title: {
      fr:"Expérience",
      en: "Experience"}
  },
  {
    id: "contact",
    title: {
      fr:"Contact",
      en: "Contact"}
  },
];
  
const services = [
  {
    title: {
      fr:"Développeur Web Fullstack",
      en: "Fullstack Developper"},
    icon: web,
  },
  {
    title:{
      fr:"Développeur Front-end",
      en: "Front-end Developper"} ,
    icon: mobile,
  },
  {
    title: {
      fr:"Développeur Back-end",
      en:"Back-end Developper"},
    icon: backend,
  },
  {
    title: {
      fr:"Base de données",
      en:"Database"},
    icon: creator,
  },
];
  
const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PSQL",
    icon: psql,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name:"recoil",
    icon:recoil,
  },
];
  
const experiences = [
  {
    title: {
      fr:"TP : Développeur Web et Web Mobile",
      en:"Graduate in Web developpement"
    },
    company_name: "O'Clock",
    icon: oclock,
    iconBg: "#383E56",
    date: {
      fr:"Mai 2022 - Novembre 2022",
      en:"May 2022 - November 2022",
    },
    points:{
      fr:[
        "798 heures intensives (téléprésentiel)",
        "3 mois de socle (HTML5, CSS3, Javascript, NodeJs, PSQL)",
        "1 mois de spécialisation en ReactJs",
        "1 mois de projet professionnalisant",
      ],
      en:[
        "798 intensive hours [remotely]",
        "3 months (HTML5, CSS3, Javascript, NodeJs, PSQL)",
        "1 month of specialty in ReactJs",
        "1 month for the final project",
      ],
    },
  },
  {
    title: {
      fr:"Conseiller à l'emploi",
      en:"Employment Counselor"
    },
    company_name: "Pôle Emploi",
    icon: poleemploi,
    iconBg: "#FFF",
    date: {
      fr:"Octobre 2018 - Avril 2022",
      en:"October 2018 - April 2022",
    },
    points: {
      fr:[
        "Création d’outil de gestion et de suivi des évènements dans l’agence, création d’un outil de suivi des demandeurs en attente de formation",
        "Organisation et animation d’informations collectives et d’ateliers",
        "Gestion d'un portefeuille de demandeurs d'emplois",
      ],
      en:[
        "Creation of a tool for managing and monitoring events in the agency, creation of a tool for monitoring applicants awaiting training",
        "Organization and animation of collective information and group meetings",
        "Management of job seekers",
      ],
    },
  },
  {
    title: {
      fr:"Conception moteur",
      en:"Engine Design"
    },
    company_name: "PSA Groupe",
    icon: psa,
    iconBg: "#E6DEDD",
    date: {
      fr:"Septembre 2007 - Septembre 2018",
      en:"September 2007 - September 2018",
    },
    points: {
      fr:[
        "Planification de programme d’essai en interne et en externe (Allemagne, Italie)",
        "relation avec les fournisseurs et sous -traitants",
        "Suivi des essais et des moyens d’essai, compte rendu de campagne d’essai",
        "Formation des nouveaux arrivants aux procédures et logiciels d’essais"
      ],
      en:[
        "Test program planning internally and externally (Germany, Italy)",
        "relationship with suppliers and subcontractors",
        "Monitoring of tests and test resources, test campaign report",
        "Training newcomers to test procedures and software"
      ],
    },
  },
];
  
const testimonials = [
  {
    testimonial:{
      fr:"Le jury t’a trouvé calme. Tu as démontré une bonne maîtrise du sujet aussi bien en front qu’en back. Ta bonne aisance communicationnelle a été appréciée.",
      en:"The jury found you calm. You have demonstrated a good mastery of the subject both front and back. Your good communication skills were appreciated.",
    },
    name: "Titre PRO ",
    designation: {fr:"Jury",en:"Jury"},
    company: "DWWM",
    image: html,
  },
  {
    testimonial:
    {
      fr:"Tu as de réelles aptitudes pour ce métier, c’est indéniable ! Tu auras fourni un travail régulier tout au long de la formation, même dans les cours les plus difficiles. Ton investissement dans l’apothéose, pendant laquelle tu as montré de belles compétences, nous prouve que tu peux avoir confiance en toi ! Continue sur cette lancée, continue à pratiquer, tu as un avenir certain dans le développement 😉",
      en:"You have real skills for this job, it's undeniable! You had provided regular work throughout the training, even in the most difficult courses. Your investment in the apotheosis, during which you showed great skills, proves to us that you can have confidence in yourself! Keep up the momentum, keep practicing, you have a definite future in development 😉",
    },
    name: "Andre L.",
    designation: {
      fr:"Référent pédagogique",
      en:"Pedagogical referent",
    },
    company: "O'Clock",
    image: oclock,
  },
];
  
const projects = [
  {
    name: "Portfolio",
    description:{
      fr:"Mon portfolio, préentant mon parcours et regroupant mes projets disponibles",
      en:"My portfolio, presenting my background and grouping my available projects"
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-blue-200",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/alexandrelegleye/Portfolio",
    deploy_link: "https://alexandre-legleye.com/",
  },
  {
    name: "Id Frog",
    description:{
      fr:"Plateforme de mise en relation des porteurs de projets et des investisseurs (business angels)",
      en:"Platform for connecting project leaders and investors (business angels)"
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "text-yellow-200",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "psql",
        color: "grey-text-gradient",
      },
      {
        name: "Material UI",
        color: "text-blue-700",
      },
      {
        name: "Recoil",
        color: "text-blue-500",
      },
    ],
    image: idfrog,
    source_code_link: "https://github.com/alexandrelegleye/IdFrog-Legleye",
    deploy_link: "https://idfrog.alexandre-legleye.com/",
  },
  {
    name: "Cospi athlétisme",
    description:
        {
          fr:"Site de présentation et d'inscription pour un club d'athlétisme de la Réunion",
          en:"Presentation and registration site for an athletics club in Réunion Island",
        },
    tags: [
      {
        name: "WordPress",
        color: "white-text-gradient",
      },
    ],
    image: cospi,
    //source_code_link: "https://github.com/",
    deploy_link: "https://cospi.re/",
  },
  {
    name: "Appli Météo",
    description:
        "Application météo codée au début de ma formation React",
    tags: [
      {
        name: "React",
        color: "white-text-gradient",
      },
    ],
    image: weathermap,
    source_code_link: "https://github.com/alexandrelegleye/Meteo-with-map",
    deploy_link: "https://weather-map.alexandre-legleye.com/",
  },
];
  
export { services, technologies, experiences, testimonials, projects };