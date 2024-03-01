import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.js'

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
    return (
        <div className="flex items-center p-4 border-gray-300">
            <div className="mr-4">
                <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className="w-24 h-24 object-cover" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title} {product.size}</h3>
            </div>
            <div className="flex items-center">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={async () => {
                    updateItem(product.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => {
                    updateItem(product.id, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">Subtotal: ${product.price * count}</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500  text-white px4 py-2 rounded" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}