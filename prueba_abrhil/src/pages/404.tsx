import { useNavigate } from "react-router"
export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <section >
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-bold font-medium text-gray-900 dark:text-gray-900">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-6xl">Pagina no encontrada</h1>
                    <p className="mt-4 text-gray-900 text-xl md:text-2xl"> Lo sentimos, la página que estás buscando no existe. Aquí hay algunos enlaces útiles:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                            onClick={() => navigate("/")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Volver</span>
                        </button>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src="404.svg" alt="Illustration" />
                </div>
            </div>
        </section>
    )
}
