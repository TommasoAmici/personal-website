import React from "react";

const NavLink = props => (
  <li className="nav-li">
    <a className="nav-link" onClick={props.onClick} href={props.href}>
      {props.children}
    </a>
  </li>
);

export const NavbarAlt = () => {
  return (
    <nav>
      <ul className="nav-ul">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/misc">Misc</NavLink>
      </ul>
    </nav>
  );
};

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
