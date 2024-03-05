import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()//Devuelve la locacion actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        const cliente = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple

        //Modificar stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { //Si existe stock suficinete para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }

            })

        })
        //Generar la orden de Compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                                Volver al inicio
                            </button>
                        </Link>

                    </>
                    :
                    <div className="max-w-md mx-auto p-6 mt-2 bg-gray-200 rounded-md shadow-md">
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <label className="block mb-1 text-gray-700">Nombre: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="nombre" />
                            <label className="block mb-1 text-gray-700">Apellido: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="apellido" />
                            <label className="block mb-1 text-gray-700">Direccion: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="direccion" />
                            <label className="block mb-1 text-gray-700">DNI: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="dni" />
                            <label className="block mb-1 text-gray-700">Email: </label>
                            <input type="email" className="w-full p-2 mb-3 border rounded-md" name="email" />
                            <label className="block mb-1 text-gray-700">Telefono: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="telefono" />
                            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Finalizar</button>
                        </form>
                    </div>
            }
        </>

    )
}