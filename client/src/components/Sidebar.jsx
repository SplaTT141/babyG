import { NavLink } from "react-router-dom";
import stats from "../assets/img/stats.svg";
import orders from "../assets/img/orders.svg";
import clients from "../assets/img/clients.svg";
import storage from "../assets/img/storage.svg";
import products from "../assets/img/products.svg";
import overview from "../assets/img/overview.svg";
import expand from "../assets/img/expand.svg";
import { useState } from "react";

export function Sidebar({setTitle}) {
    const navLinks = [
        {
            img: overview,
            title: 'Apžvalga',
            link: '/admin/apzvalga'
        },
        {
            img: orders,
            title: 'Užsakymai',  
            link: '/admin/uzsakymai'
        },
        {
            img: products,
            title: 'Prekės',  
            link: '/admin/prekes',  
        },
        {
            img: storage,
            title: 'Sandėlis',  
            link: '/admin/sandelis',  
        },
        {
            img: stats,
            title: 'Statistika',  
            link: '/admin/statistika',  
        },
        {
            img: clients,
            title: 'Klientai', 
            link: '/admin/klientai',  
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={
                    `bg-white ${isOpen ? 'w-45' : 'sm:w-15'}
                    flex flex-col items-center pt-4
                    transition-all duration-100 ease-in-out
                    border-r border-gray-300`}
        >

            <button 
                onClick={() => {setIsOpen(!isOpen)}}
                className={`${isOpen ? 'rotate-180' : ''} w-6 sm:w-7 duration-300 ease-out cursor-pointer hover-scale-md`}
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
                            onClick={() => {setTitle(link.title)}} 
                        >
                            <img className="w-7 sm:w-10" src={link.img} alt={`${link.title}`} />
                            <span className={`${!isOpen ? 'hidden' : ''} font-bold text-sm sm:text-base`}>{link.title}</span>
                        </NavLink>
                    ))
                }
            </div>
        </section>
    )
}