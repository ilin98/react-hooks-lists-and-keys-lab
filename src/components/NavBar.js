import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map(link => <a key={link} href= {'#' + link}>{link}</a>)
  return (
  <nav>
    {linkList}
  </nav>
  )
}

export default NavBar;
