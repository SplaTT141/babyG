import { useContext } from "react";
import { UserContext } from "../../context/UserContext"

export function AdminDashboardPage() {
    const {username} = useContext(UserContext);

    return (
        <h1>Vartotojo vardas:{username}</h1>
    )
}