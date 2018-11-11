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
          <title>About</title>
          <meta
            name="description"
            content="A little bit about me, but not too much"
          />
        </Helmet>
        <Main scrollTo={1} />
      </div>
    );
  }
}
