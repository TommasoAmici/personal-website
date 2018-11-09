import React from "react";
import TableOfContents from "../components/TableOfContents";
import Navbar from "../components/Navbar";

export default () => (
  <>
    <Navbar />
    <div className="table-of-projects">
      <TableOfContents all={true} />
    </div>
  </>
);
