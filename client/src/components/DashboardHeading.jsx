import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useLocation } from "react-router-dom";

export function DashboardHeading({title}) {
    const {username} = useContext(UserContext);
    const location = useLocation();
    let displayTitle = title;

    if (location.pathname === '/admin') displayTitle = 'Valdymo skydelis';

    return (
        <section className="bg-white">
            <div className="flex justify-between items-center px-5 h-10 md:px-10 md:h-15">
                <h1 className="font-bold">{displayTitle}</h1>
                <span className="text-black text-xl rounded-full bg-orange px-2 md:text-3xl">{username[0].toUpperCase()}</span>
            </div>
        </section>
    )
}