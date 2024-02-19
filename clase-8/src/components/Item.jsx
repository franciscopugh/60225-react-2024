import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
                <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
                <h2 className="text-lg font-semibold font-bold mb-2">{product.title} {product.description}</h2>
                <p className="text-gray-700 mb-2 font-semibold">Tamaño maseta: {product.size}</p>
                <p className="text-gray-700 mb-2 font-semibold ">Precio: ${product.price}</p>
            </div >
        </Link>
    )
}