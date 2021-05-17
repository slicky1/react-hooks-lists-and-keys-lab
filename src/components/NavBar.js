import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];

  const a_links = links.map( (link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{a_links}</nav>;
}

export default NavBar;