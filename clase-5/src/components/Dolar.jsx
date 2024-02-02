import { useState, useEffect } from "react"

export const Dolar = () => {
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
            .then((response) => response.json())
            .then((data) => {
                const molde =
                    <div>
                        <h3>Cotizacion del dolar</h3>
                        <p>Dolar Mayorista: {data.mayorista.price}</p>
                        <p>Dolar Tarjeta: {data.tarjeta.price}</p>
                        <p>Dolar Oficial: {data.oficial.price}</p>
                    </div>

                setDolar(molde)
            })
            .catch(error => console.log)
    }, [])


    return (
        <>
            {dolar}
        </>
    )
}