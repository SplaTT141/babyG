import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PublicLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)] sm:container sm:mx-auto sm:w-9/10 sm:mt-4 sm:rounded-lg">
                <Header />
            </div>
            <main className="flex flex-col flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )    
}