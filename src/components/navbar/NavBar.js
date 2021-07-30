import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const nav = {
    n1 :"{./I'm}",
    n2 :"{./Skills}",
    n3 :"{./Proyects}", 
    n4 :"{./Networks}"
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__link">
          <ul className="navbar__ul">
            <a className="navbar__a">{nav.n1}</a>
          </ul>
          <ul className="navbar__ul">
            <a className="navbar__a">{nav.n2}</a>
          </ul>
          <ul className="navbar__ul">
            <a className="navbar__a">{nav.n3}</a>
          </ul>
          <ul className="navbar__ul">
            <a className="navbar__a">{nav.n4}</a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
