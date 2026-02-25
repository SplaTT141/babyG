import { NavLink } from "react-router-dom";
import stats from "../assets/img/stats.svg";
import orders from "../assets/img/orders.svg";
import clients from "../assets/img/clients.svg";
import storage from "../assets/img/storage.svg";
import overview from "../assets/img/overview.svg";

export function Sidebar() {
    const navLinks = [
        {
            img: overview,
            text: 'Apžvalga',  
        },
        {
            img: orders,
            text: 'Užsakymai',  
        },
        {
            img: storage,
            text: 'Sandelis',  
        },
        {
            img: stats,
            text: 'Statistika',  
        },
        {
            img: clients,
            text: 'Klientai',  
        },
    ]

    return (
        <section className="section-white w-10">
            <div className="flex flex-col gap-5 pt-5">
                {
                    navLinks.map(link => (
                        <NavLink><img src={link.img} alt={`${link.img}`} /></NavLink>
                    ))
                }
            </div>
        </section>
    )
}