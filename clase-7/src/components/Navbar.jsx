import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"
export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white">LOGO</div>
                    <ul className="flex space-x-4">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}