import { NavLink } from "react-router-dom";
import stats from "../assets/img/stats.svg";
import orders from "../assets/img/orders.svg";
import clients from "../assets/img/clients.svg";
import storage from "../assets/img/storage.svg";
import overview from "../assets/img/overview.svg";
import expand from "../assets/img/expand.svg";
import { useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="bg-white w-10 flex-1">
            <div className="flex flex-col gap-5 py-5 items-center">
            <button onClick={() => {setIsOpen(!isOpen)}} className="w-7"><img src={expand} alt="expand" /></button>
                {
                    navLinks.map(link => (
                        <NavLink><img className="w-8" src={link.img} alt={`${link.img}`} />{isOpen ? link.text : ''}</NavLink>
                    ))
                }
            </div>
        </section>
    )
}