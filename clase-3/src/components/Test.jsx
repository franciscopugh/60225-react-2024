import { useState } from "react"

export const Test = ({ mensaje }) => {
    //Valor - Forma de modificarlo - Valor inicial
    const [numero, setNumero] = useState(0)

    return (
        <div>
            <button onClick={() => setNumero(numero + 1)}>Sumar boton</button>
            <p>{numero}</p>
            <p>{mensaje}</p>
        </div>
    )
}