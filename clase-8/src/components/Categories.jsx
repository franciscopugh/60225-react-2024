import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faTree, faSeedling } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        <span>0</span>
                    </button>
                </Link>

            </li>
            <li className="text-white">
                <Link to={'/category/interior'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faSeedling} className="mr-2" />
                        <span>0</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/exterior'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faTree} className="mr-2" />
                        <span>0</span>
                    </button>
                </Link>

            </li>
        </>
    )
}