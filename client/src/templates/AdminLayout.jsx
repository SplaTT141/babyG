import { Header } from "../components/Header"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { LoginRequired } from "../components/LoginRequired";

export function AdminLayout() {
    const {role} = useContext(UserContext);

    return (
        <>
            <Header />
            {
                role === 'admin'
                ?
                <Outlet />
                : 
                <LoginRequired />
            }
            <Footer />
        </>
    )
}