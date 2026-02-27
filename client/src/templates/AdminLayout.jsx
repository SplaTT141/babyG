import { Header } from "../components/Header"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { LoginRequired } from "../components/LoginRequired";
import { Sidebar } from "../components/Sidebar";
import { DashboardHeading } from "../components/DashboardHeading";

export function AdminLayout() {
    const {role} = useContext(UserContext);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-white border-b">
                <div className="container">
                    <Header />
                </div>
            </div>
            {
                role === 'admin'
                ?
                <main className="flex flex-1">
                    <Sidebar />
                    <div className="flex flex-col w-full">
                        <DashboardHeading />
                        <Outlet />
                    </div>
                </main>
                : 
                <main className="flex flex-col flex-1">
                    <LoginRequired />
                </main>
            }
            <Footer />
        </div>
    )
}