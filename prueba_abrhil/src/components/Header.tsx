import { Link } from "react-router";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router";
export default function Header() {
    const navigate = useNavigate();
    const { logout, user } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="px-4 py-3 bg-gray-100 sticky top-0 z-10 md:flex md:items-stretch w-full">
            <div className="flex flex-no-shrink items-stretch h-12">
                <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center text-2xl">Prueba Tecnica Abrhil</a>
            </div>
            <div className="md:flex md:items-stretch md:flex-no-shrink md:grow">
                <div className="md:flex md:items-stretch md:justify-end ml-auto gap-2">
                    <Link to="/users" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Usuarios</Link>
                    <Link to="/profile" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Perfil</Link>
                    {user?.role !== 'USER' && (
                        <Link to="/admin/audit" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-900 no-underline flex items-center hover:bg-gray-300 rounded-xl">Auditar</Link>
                    )}
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}
