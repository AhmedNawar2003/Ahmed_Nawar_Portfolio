import Head from "next/head";
import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Contact from "../components/Contact/Contact";
import About from '../components/About/About.jsx';
import Education from '../components/Education/Education.jsx';
import Courses from './../components/Courses/Courses';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Nawar | Front-End Developer</title>
        <meta name="description" content="Portfolio of Ahmed Nawar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Ahmed Nawar, Front-End Developer, Portfolio" />
        <meta name="author" content="Ahmed Nawar" />
        <meta property="og:title" content="Ahmed Nawar | Front-End Developer" />
        <meta property="og:description" content="Portfolio of Ahmed Nawar" />
        <link rel="icon" href="../../public/images/ahmed.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Hero />
      <About />
      <Education/>
      <Courses/>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
