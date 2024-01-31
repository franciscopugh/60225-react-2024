import './styles/App.css'
import { ItemCount } from './components/ItemCount'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemCount />
      <ItemListContainer greeting={"Hola, buenas noches"} />
    </>
  )
}