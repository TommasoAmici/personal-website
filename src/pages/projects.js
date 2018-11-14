import React from "react";
import { Helmet } from "react-helmet";
import Main from "../components/Main";
import "../style/App.scss";

// workaround for url for each page in parallax: duplicate page and scroll on load

export default class Pages extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects</title>
          <meta
            name="description"
            content="An overview of what I've been working on"
          />
        </Helmet>
        <Main scrollTo={2} />
      </div>
    );
  }
}
