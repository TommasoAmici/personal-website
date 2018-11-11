import React from "react";
import Main from "../components/Main";

// workaround for url for each page in parallax: duplicate page and scroll on load

export default class Pages extends React.Component {
  render() {
    return <Main scrollTo={3} title={"Misc"} />;
  }
}
