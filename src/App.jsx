import NavBar from './components/Navbar'
import ItemListContainer from './Components/ItemListContanier'
import './index.scss'
import Catalog from './Components/Category'
import Detail from './Components/ItemDetailContainer'
import React from 'react';
import { BrowserRouter as Router, Link, NavLink, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Aplicación de Catálogo</h1>
        <nav>
              <NavBar/>
              <NavLink to="/catalog">Catálogo</NavLink>
            
        </nav>
        <hr/>
          <Link to="/catalog/:id" component={Detail} />
          <Link to="/category/:categoryId" component={ItemListContainer} />
          <Link to="/catalog" component={Catalog} />
        
      </div>
    </BrowserRouter>
  );
}

export default App