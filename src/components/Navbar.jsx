import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";

function NavBar() {
  useEffect(() => {
    const collapsibleElementMobile = document.querySelectorAll('.collapsible');
    const dropdownElementDesktop = document.querySelectorAll('.dropdown-trigger-desktop');
    const sideNavElement = document.querySelectorAll('.sidenav');

    M.Collapsible.init(collapsibleElementMobile, {});
    M.Dropdown.init(dropdownElementDesktop, { coverTrigger: false });
    M.Sidenav.init(sideNavElement, { edge: 'right' });
  }, []);

  return (
    <>
      <ul id="dropdown1" className="dropdown-content green lighten-5">
        <li><Link to={`/category/bebidas`}>Jackets</Link></li>
        <li><Link to={`/category/snacks`}>Jeans</Link></li>
      </ul>
      <div>
        <nav>
          <div className="nav-wrapper green lighten-3">
            <Link to={`/`} className="brand-logo center">Infinity Denim</Link>
            <ul className="right hide-on-small-only">
              <li><a href="#" className="dropdown-trigger-desktop" data-target="dropdown1">Denim<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Ubicación</a></li>
              <li><CartWidget /></li>
            </ul>
            <div className="right hide-on-med-and-up">
              <ul id="slide-out" className="sidenav red lighten-4">
                <ul className="collapsible expandable">
                  <li>
                    <div className="collapsible-header">Denim<i className="material-icons right">arrow_drop_down</i></div>
                    <div className="collapsible-body green lighten-5">
                      <Link to={`/category/bebidas`}>Jackets</Link>
                      <Link to={`/category/snacks`}>Jeans</Link>
                    </div>
                  </li>
                </ul>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Ubicación</a></li>
                <li><CartWidget/></li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;