import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { NavBar } from './componets/NavBar'
import { ItemListContainer } from './componets/ItemListContainer'

function App() {


  return (
    <>
    <NavBar/> 
    <ItemListContainer greeting={'soy el greeting'}/> 
    </>
  )
}

export default App
