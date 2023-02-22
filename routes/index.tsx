import { Head } from "$fresh/runtime.ts";

import { SocialMedia } from "../components/socialmedia.tsx";
import { Avatar } from "../components/avatar.tsx";
import { Header } from "../components/header.tsx";
import { ExperiencesList } from "../components/experiences-list.tsx";
import BackToTop from "../islands/BackToTop.tsx";

export default function Home() {
  const social = [
    { name: "Github", url: "https://github.com/Jean-Dv" },
    {
      name: "Linkedin",
      url:
        "https://www.linkedin.com/in/jean-carlos-valencia-barajas-a1a02a201/",
    },
    { name: "Twitter", url: "https://twitter.com/JeanCar68770327" },
  ];
  const experience = [
    {
      title: "Desarrollador de Backend",
      company: "MoonShard WoW",
      from: "2022-07-02",
      to: "2022-11-02",
      location: "Ecuador",
      technologies: ["Linux", "Git", "GitHub", "Docker", "MySQL"],
    },
    {
      title: "Desarrollador de Software",
      company: "NetGrid SAS - Transformando Compañías",
      from: "2022-05-02",
      to: "2022-07-02",
      location: "Colombia",
      technologies: ["node-js", "js", "git", "github"],
    },
    {
      title: "Desarrollador de Software",
      company: "Elune WoW",
      from: "2020-06-02",
      to: "2021-01-02",
      location: "Ecuador",
      technologies: ["python", "linux", "git", "github"],
    },
  ];
  return (
    <>
      <div class="App">
        <section class="home__section">
          <Head>
            <title>Fresh App</title>
            <link rel="stylesheet" href="/styles/index.min.css" />
            <link rel="stylesheet" href="/styles/pages/home.min.css" />
          </Head>
          <Header />
          <div class="home__container">
            <div class="title__container">
              <h1 class="home__title">
                Hi, my name is <br />
                <b>Jean Valencia</b>
              </h1>
              <span className="home__description">
                I'm an <b>System Engineer</b> from <br /> Colombian
              </span>
              <a target="_blank" rel="noopener noreferrer" href="#">
                Download CV
              </a>
            </div>
            <div class="avatar__container spaced">
              <Avatar />
            </div>
            <div class="home__scroll">
              <span>Scroll Down</span>
            </div>
          </div>
        </section>
        <section id="experiences" class="experiences__section">
          <div class="experiences__container">
            <div class="section__title">
              <i class="fa fa-user" />
              <h1>Experience</h1>
            </div>
            <ExperiencesList experience={experience} />
          </div>
        </section>
        <SocialMedia social={social} />
        <BackToTop />
      </div>
    </>
  );
}
