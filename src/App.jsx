import NavBar from './components/Navbar'
import ItemListContainer from './Components/ItemListContanier'
import './index.scss'
import Catalog from './Components/Category'
import Detail from './Components/ItemDetailContainer'
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <h1>Aplicación de Catálogo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/catalog">Catálogo</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/catalog/:id" component={Detail} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App