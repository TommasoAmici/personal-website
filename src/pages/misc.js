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
          <title>Misc</title>
          <meta name="description" content="A small blog of things I like" />
        </Helmet>
        <Main scrollTo={3} />
      </div>
    );
  }
}
