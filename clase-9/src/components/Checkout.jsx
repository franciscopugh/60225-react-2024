import { useRef } from "react"

export const Checkout = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        const data = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple
        console.log(data)
        e.target.reset()
    }
    return (
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
    )
}