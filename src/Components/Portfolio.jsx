/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/pic5.jpg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio website",
    description:
      "This is my portfolio website where i explain about my experiences and skills as well as educational information.",
    url: " https://samreentar.github.io/CodeSoft-Task-1-Portfolio/",
  },
  {
    title: "My Calculator website",
    description:
      "This is my Calculator website where i can perform multiple operations like addition ,subraction ,multiplication and division.",
    url: "https://samreentar.github.io/CodeSoft-Task-2-calculator/",
  },
  {
    title: "My To-Do-List App ",
    description:
      "This is my to do list app where i can add new task save new task and delete any task.",
    url: "https://samreentar.github.io/CodeSoft-Task-3-To-Do-List/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover" }} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
