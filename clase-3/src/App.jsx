import './styles/App.css'
import { Test } from './components/Test'
export const App = () => {
  return (
    <>
      <Test mensaje={"Hola"} />
      <Test mensaje={"Buenas"} />
      <Test mensaje={"Noches"} />
      <Test mensaje={"Gente"} />
      <Test mensaje={"Hermosa!"} />
    </>
  )
}