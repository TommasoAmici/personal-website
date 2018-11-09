import React from "react";
import classNames from "classnames";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import ProjectsPage from "../components/ProjectsPage";
import ThingsPage from "../components/ThingsPage";
import "../style/App.scss";

// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";

const Page = ({
  offset,
  title,
  caption,
  first,
  second,
  paragraph,
  gradient,
  onClick
}) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={classNames("slopeEnd", gradient)} />
    </ParallaxLayer>

    {title && (
      <ParallaxLayer className="text title" offset={offset} speed={0.3}>
        <span>{title}</span>
      </ParallaxLayer>
    )}

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p className="caption">{caption}</p>
        <div className={classNames("stripe", gradient)} />
        <p>{first}</p>
        <p className="second">{second}</p>
      </span>
    </ParallaxLayer>

    {paragraph && (
      <ParallaxLayer className="text paragraph" offset={offset} speed={0.3}>
        <p>{paragraph}</p>
      </ParallaxLayer>
    )}
  </>
);

export default class Pages extends React.Component {
  scroll = (to, title) => {
    this.refs.parallax.scrollTo(to);
    document.title = title;
  };
  render() {
    document.title = "Home";
    return (
      <div>
        <Navbar
          clickHome={() => this.scroll(0, "Home")}
          clickAbout={() => this.scroll(1, "About")}
          clickProjects={() => this.scroll(2, "Projects")}
          clickCV={() => this.scroll(3, "Things I liked recently")}
        />
        <Parallax
          className="container"
          ref="parallax"
          pages={4}
          horizontal
          scrolling={false}
        >
          <HomePage
            offset={0}
            gradient="pink"
            gradient2="pink-2"
            first="Tommaso Amici"
            caption="Out of Turin, Amsterdam based"
            title="Home"
          />
          <Page
            offset={1}
            gradient="teal"
            caption="About me"
            paragraph="Exercitation in eu Lorem eu ex ex est mollit occaecat esse consectetur. Aliqua minim do consequat adipisicing ut cillum. Consectetur tempor voluptate adipisicing laboris aliqua sint non cillum proident ut aute ipsum. Sint esse anim irure commodo reprehenderit Lorem pariatur esse ipsum commodo."
          />
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
