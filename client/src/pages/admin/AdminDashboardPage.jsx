import { useContext } from "react";
import { UserContext } from "../../context/UserContext"

export function AdminDashboardPage() {
    const {username} = useContext(UserContext);
    console.log(username)

    return (
        <main>
            <h1>Vartotojo vardas:{username}</h1>
        </main>
    )
}