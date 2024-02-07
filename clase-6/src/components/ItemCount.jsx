import { useState } from "react"

export const ItemCount = () => {

    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center space-x-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleDecrement}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleIncrement}>
                    +
                </button>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}