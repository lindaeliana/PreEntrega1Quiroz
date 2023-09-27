import CartWidget from "./Cartwidget";

function NavBar() {
  return (
    <ul>
      <div className="nav">
        <nav>
          <div className="nav1"> 
            <main href="#">Infinity Denim</main>
            <ul >
              <li><a class="nav-link fs-5 text-light" href="#">Productos</a></li>
              <li><a class="nav-link fs-5 text-light" href="#">Contacto</a></li>
              <li><a class="nav-link fs-5 text-light" href="#">Ubicación</a></li>
              <li className="carri"><CartWidget/></li>
            </ul>
          </div>
        </nav>
      </div>
    </ul>
  );
}

export default NavBar;