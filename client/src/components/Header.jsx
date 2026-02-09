import logo from "../assets/img/logo.png";
import bag from "../assets/img/bag.svg";
import heart from "../assets/img/heart.svg";
import hamburger from "../assets/img/hamburger.svg";
import xmark from "../assets/img/xmark.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {text: 'Pagrindinis', link: '/'},
        {text: 'Apie mus', link: '/apie-mus'},
        {text: 'Kolekcija', link: '/kolekcija'},
        {text: 'Kontaktai', link: '/kontaktai'},
        {text: 'login(laikina)', link: '/login'},
    ]

    return(
        <header className="container mx-auto w-9/10 bg-white mt-4 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]">
            <div className="flex justify-between items-center px-3">
                {/*---------- Toggle mobile menu visibility ----------*/}
                <button onClick={() => {setIsOpen(!isOpen)}} className="sm:hidden w-8 cursor-pointer">
                    <img src={!isOpen ? hamburger : xmark} alt="mobile menu" />
                </button>

                <Link to={'/'}>
                    <img className="w-22" src={logo} alt="logo" />
                </Link>

                <div className="hidden sm:inline font-bold text-md">
                    <ul className="flex gap-5">
                        {
                            navLinks.map((link, index) => (<li className=" hover-scale-sm" key={index}><NavLink to={link.link}>{link.text}</NavLink></li>))
                        }
                    </ul>
                </div>
                
                <div>
                    <ul className="flex gap-2">
                        <li ><Link to="#"><img className="w-7 hover-scale-xl" src={bag} alt="bag" /></Link></li>
                        <li><Link to="#"><img className="w-7 hover-scale-xl" src={heart} alt="heart" /></Link></li>
                    </ul>
                </div>
            </div>
            
                {/*---------- Mobile menu ----------*/}
                <div className={`sm:hidden p-3 ${!isOpen ? "hidden" : ""}`}>
                    <ul className="text-lg font-bold border-t border-gray-300">
                        {
                            navLinks.map((link, index) => (<li onClick={() => {setIsOpen(false)}} className="hover:bg-gray-50 p-2" key={index}><Link to={link.link}>{link.text}</Link></li>))
                        }
                    </ul>
                </div>
        </header>
    )
}