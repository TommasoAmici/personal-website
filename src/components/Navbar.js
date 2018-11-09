import React from "react";

const NavLink = props => (
  <li className="nav-li">
    <a className="nav-link" onClick={props.onClick}>
      {props.children}
    </a>
  </li>
);

export default props => {
  const { clickHome, clickAbout, clickProjects, clickMisc } = props;
  return (
    <nav>
      <ul className="nav-ul">
        <NavLink onClick={clickHome}>Home</NavLink>
        <NavLink onClick={clickAbout}>About</NavLink>
        <NavLink onClick={clickProjects}>Projects</NavLink>
        <NavLink onClick={clickMisc}>Misc</NavLink>
      </ul>
    </nav>
  );
};
