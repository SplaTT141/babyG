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
            link: '/admin/apzvalga'
        },
        {
            img: orders,
            text: 'Užsakymai',  
            link: '/admin/uzsakymai'
        },
        {
            img: storage,
            text: 'Sandelis',  
            link: '/admin/sandelis',  
        },
        {
            img: stats,
            text: 'Statistika',  
            link: '/admin/statistika',  
        },
        {
            img: clients,
            text: 'Klientai', 
            link: '/admin/klientai',  
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={
                    `bg-white ${!isOpen ? "w-15" : 'w-35'} 
                    flex-1 flex flex-col items-center pt-4
                    transition-all duration-300 ease-in-out`}
        >

            <button 
                onClick={() => {setIsOpen(!isOpen)}}
                className={`${isOpen ? 'rotate-180' : ''} w-7 duration-300 ease-out cursor-pointer hover-scale-md`}
            >
                <img src={expand} alt="expand" />
            </button>

            <div className="flex flex-col gap-3 pt-4">
                {
                    navLinks.map(link => (
                        <NavLink 
                            className="flex items-center gap-3 hover-scale-md p-1 dashboard-links"
                            key={link.link}
                            to={link.link}    
                        >
                            <img className="w-8" src={link.img} alt={`${link.text}`} />
                            <span className={`${!isOpen ? 'hidden' : ''} font-bold`}>{link.text}</span>
                        </NavLink>
                    ))
                }
            </div>
        </section>
    )
}