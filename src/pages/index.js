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
          <title>Tommaso Amici</title>
          <meta
            name="description"
            content="My personal website and portfolio"
          />
        </Helmet>
        <Main scrollTo={0} />
      </div>
    );
  }
}
