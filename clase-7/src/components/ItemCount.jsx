import { useCounter } from "../hooks/useCounter"

export const ItemCount = () => {
    const { count, increment, decrement, reset } = useCounter(1, 10, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center space-x-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={decrement}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={increment}>
                    +
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={reset}>
                    Reset
                </button>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}