import { Link } from "react-router";

export default function Header() {
    return (
        <nav className="px-4 py-3 bg-gray-100 sticky top-0 z-10 lg:flex lg:items-stretch w-full">
            <div className="flex flex-no-shrink items-stretch h-12">
                <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center text-2xl">Prueba Tecnica Abrhil</a>
            </div>
            <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:grow">
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto gap-2">
                    <Link to="/users" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Usuarios</Link>
                    <Link to="/profile" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Perfil</Link>
                    <Link to="/admin/audit" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Auditar</Link>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}
