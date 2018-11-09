import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import ProjectsPage from "../components/ProjectsPage";
import ThingsPage from "../components/ThingsPage";
import AboutPage from "../components/AboutPage";
import "../style/App.scss";

// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners
import { Parallax } from "react-spring/dist/addons";
// workaround for url for each page in parallax: duplicate page and scroll on load

export default class Pages extends React.Component {
  scroll = (to, title) => {
    this.refs.parallax.scrollTo(to);
    document.title = title;
  };
  render() {
    return (
      <div>
        <Navbar
          clickHome={() => this.scroll(0, "Home")}
          clickAbout={() => this.scroll(1, "About")}
          clickProjects={() => this.scroll(2, "Projects")}
          clickMisc={() => this.scroll(3, "Things I liked recently")}
        />
        <Parallax
          className="container"
          ref="parallax"
          pages={4}
          native
          horizontal={false}
          scrolling={true}
        >
          <HomePage
            offset={0}
            gradient="pink"
            gradient2="pink-2"
            first="Tommaso Amici"
            caption="Out of Turin, based in Amsterdam"
            title="Home"
          />
          <AboutPage offset={1} gradient="teal" />
          <ProjectsPage
            offset={2}
            gradient="tomato"
            caption="What I've been working on"
            title="Projects"
          />
          <ThingsPage
            offset={3}
            gradient="greenleaf"
            caption="Music, and things. Not just a box of printed out memes"
            title="+1"
          />
        </Parallax>
      </div>
    );
  }
}
