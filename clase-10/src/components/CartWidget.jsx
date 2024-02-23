import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useCarritoContext } from "../context/CartContext"
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <li className="text-white">
            <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>{getItemQuantity()}</span>
            </button>
        </li>
    )
}