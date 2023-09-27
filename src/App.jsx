import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './index.scss'

function App() {
  
  const greetingM = "¡Bienvenido/a a nuestra Página!";

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greetingM} />
    </>
  )
}

export default App