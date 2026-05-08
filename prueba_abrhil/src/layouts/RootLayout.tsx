import { Outlet } from "react-router";
import Header from '../components/Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </>
    )
}
