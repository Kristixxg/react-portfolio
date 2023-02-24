import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiGraphql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies that I work with the most</h5>
      <h2>My skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <h4>Next.js</h4>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="experience__details">
              <h4>TypeScript</h4>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <h4>TailwindCSS</h4>
            </article>

            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Node JS</h4>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express JS</h4>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <h4>Mysql</h4>
            </article>

            <article className="experience__details">
              <SiGraphql className="experience__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experience__details">
              <SiGraphql className="experience__details-icon" />
              <h4>Prisma</h4>
            </article>
            <article className="experience__details">
              <SiGraphql className="experience__details-icon" />
              <h4>tRPC</h4>
            </article>
          </div>
        </div>
        <div>
          <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>

            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Vercel</h4>
            </article>

            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Heroku</h4>
            </article>

            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>AWS</h4>
            </article>

            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Sanity.io</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
