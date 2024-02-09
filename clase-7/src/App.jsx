import './styles/App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemCount } from './components/ItemCount'
import { Footer } from './components/Footer'
export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCount />
      <Footer />
    </>
  )
}