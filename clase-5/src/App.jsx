import './styles/App.css'
import { ItemCount } from './components/ItemCount'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { Dolar } from './components/Dolar'
import { Item } from './components/Item'
export const App = () => {
  return (
    <>
      <Navbar />
      <ItemCount />
      <ItemListContainer greeting={"Hola, buenas noches"} />
      <Dolar />
      <Item product={{ title: "Lentejas", description: "Muy ricas", marca: "Marolio", stock: 20, price: 1500, img: "https://www.supermercadoacuario.com.ar/app/files/company_35/products/66585_7797470128152.jpg" }} />
      <Item product={{ title: "Lentejas", description: "Muy ricas", marca: "Marolio", stock: 20, price: 1500, img: "https://www.supermercadoacuario.com.ar/app/files/company_35/products/66585_7797470128152.jpg" }} />
      <Item product={{ title: "Lentejas", description: "Muy ricas", marca: "Marolio", stock: 20, price: 1500, img: "https://www.supermercadoacuario.com.ar/app/files/company_35/products/66585_7797470128152.jpg" }} />
    </>
  )
}