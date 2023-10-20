import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './Components/Navbar.jsx'
import ItemListContainer from './Components/ItemListContanier'
import ItemDetailContainer from './Components/ItemDetailContainer';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App