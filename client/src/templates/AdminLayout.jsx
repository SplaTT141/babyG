import { Header } from "../components/Header"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { LoginRequired } from "../components/LoginRequired";

export function AdminLayout() {
    const {role} = useContext(UserContext);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-white border-b">
                <div className="container">
                    <Header />
                </div>
            </div>
                <main>
                    {
                        role === 'admin'
                        ?
                        <Outlet />
                        : 
                        <LoginRequired />
                    }
                </main>
            <Footer />
        </div>
    )
}