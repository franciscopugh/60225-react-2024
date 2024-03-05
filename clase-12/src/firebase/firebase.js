import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "react-2024-ced6e.firebaseapp.com",
    projectId: "react-2024-ced6e",
    storageBucket: "react-2024-ced6e.appspot.com",
    messagingSenderId: "618145255389",
    appId: "1:618145255389:web:9553fbea4bf084a0463034"
};

const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/

//Crear productos

const prods = [
    {
        "title": "Monstera Deliciosa",
        "size": "Large",
        "price": 1500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/1.jpg?alt=media&token=59f5f773-760f-4375-9be6-3452e54be684",
        "category": "interior"
    },
    {
        "title": "Croton",
        "size": "Small",
        "price": 2200,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/2.jpg?alt=media&token=7aa434a3-4fe6-4b80-9c20-276baba69acd",
        "category": "interior"
    },
    {
        "title": "Calathea",
        "size": "Medium",
        "price": 2100,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/3.jpg?alt=media&token=d5741983-e885-499c-83e4-16948af9fafe",
        "category": "interior"
    },
    {
        "title": "Anthurium Vitechii",
        "size": "Small",
        "price": 1800,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/4.jpg?alt=media&token=15c318ad-b7f7-4fee-932b-ef9a6095c934",
        "category": "interior"
    },
    {
        "title": "Syngonium Albo",
        "size": "Large",
        "price": 2700,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/5.jpg?alt=media&token=8d0155f1-addb-49df-9cc3-63eaf51e1970",
        "category": "interior"
    },
    {
        "title": "Aspargus Plumoso",
        "size": "Medium",
        "price": 1700,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/6.jpg?alt=media&token=19c4bb6a-1a28-4940-aa3d-896f1e41a616",
        "category": "interior"
    },
    {
        "title": "Orquídea Phalaenopsis",
        "size": "Small",
        "price": 1800,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/7.jpg?alt=media&token=508ab5bc-ea28-4309-8a8d-69f021b19106",
        "category": "interior"
    },
    {
        "title": "Ficus elástica",
        "size": "Large",
        "price": 2800,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/8.jpg?alt=media&token=fe0489db-e525-4936-a263-a15eab221071",
        "category": "exterior"
    },
    {
        "title": "Fitonia",
        "size": "Small",
        "price": 1600,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/9.jpg?alt=media&token=5b7e71c5-cd1d-404a-969e-77893dafa93f",
        "category": "interior"
    },
    {
        "title": "Maranta Leuconeura",
        "size": "Large",
        "price": 2500,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/10.jpg?alt=media&token=8b3be1c7-869d-4356-87a0-585e25694447",
        "category": "interior"
    },
    {
        "title": "Begonia Maculata",
        "size": "Medium",
        "price": 15,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/11.jpg?alt=media&token=db31bc1f-6647-442f-9eaf-076457c7e2ba",
        "category": "interior"
    },
    {
        "title": "maranta Light",
        "size": "Medium",
        "price": 1900,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/12.jpg?alt=media&token=aa4dec93-666a-4167-a7e7-3cbcc53879c6",
        "category": "interior"
    },
    {
        "title": "Caladium",
        "size": "Large",
        "price": 2900,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/13.jpg?alt=media&token=3593ce32-5458-4105-bb32-aa0fadc79459",
        "category": "exterior"
    },
    {
        "title": "Arbol de Jade",
        "size": "Large",
        "price": 3000,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/14.jpg?alt=media&token=6086b87b-b37e-451b-aa67-114dfcbd8f4d",
        "category": "exterior"
    },
    {
        "title": "Clavel de aire",
        "size": "Medium",
        "price": 2500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-ced6e.appspot.com/o/15.jpg?alt=media&token=6dc619d7-1558-4267-86e5-53b0df01ba90",
        "category": "exterior"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}