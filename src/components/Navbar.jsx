import CartWidget from "./Cartwidget";

function NavBar() {
  return (
    <ul>
      <div>
        <nav>
          <div className="nav1"> 
            <a href="#">Kiosco Express ✨</a>
            <ul >
              <li><a href="#">Productos</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Ubicación</a></li>
              <li className="carri"><CartWidget/></li>
            </ul>
            <div className="nav1">
              <ul>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Ubicación</a></li>
                <li className="carri"><CartWidget/></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </ul>
  );
}

export default NavBar;