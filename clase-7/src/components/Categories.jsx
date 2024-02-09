import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faTree, faSeedling, faPoo } from "@fortawesome/free-solid-svg-icons"

export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    <span>0</span>
                </button>
            </li>
            <li className="text-white">
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FontAwesomeIcon icon={faSeedling} className="mr-2" />
                    <span>0</span>
                </button>
            </li>
            <li className="text-white">
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FontAwesomeIcon icon={faTree} className="mr-2" />
                    <span>0</span>
                </button>
            </li>
            <li className="text-white">
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FontAwesomeIcon icon={faPoo} className="mr-2" />
                    <span>0</span>
                </button>
            </li>
        </>
    )
}