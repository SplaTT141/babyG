import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export function DashboardHeading() {
    const {username} = useContext(UserContext);
    console.log(username)

    return (
        <section className="bg-white">
            <div className="flex justify-between items-center px-5 h-10">
                <h1>Heading</h1>
                <span className="text-black">{username}</span>
            </div>
        </section>
    )
}