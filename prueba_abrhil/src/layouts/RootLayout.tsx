import { Outlet } from "react-router";
import Header from '../components/Header';

export default function MainLayout() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex flex-col min-h-screen px-4 py-8 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    )
}
