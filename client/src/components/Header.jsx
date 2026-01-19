import logo from "../assets/img/logo.png";
import bag from "../assets/img/bag.svg";
import heart from "../assets/img/heart.svg";
import hamburger from "../assets/img/hamburger.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="container mx-auto bg-white mt-4 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]">
            <div className="flex justify-between items-center px-3">
                <button onClick={() => {setIsOpen(true); console.log(isOpen)}} className="sm:hidden w-8 cursor-pointer">
                    <img src={hamburger} alt="hamburger" />
                </button>
                <Link to={'/'}>
                    <img className="w-22" src={logo} alt="logo" />
                </Link>

                <div className="hidden sm:inline font-bold text-lg">
                    <ul className="flex gap-5">
                        <li><Link to="#">Pagrindinis</Link></li>
                        <li><Link to="#">Apie mus</Link></li>
                        <li><Link to="#">Kolekcija</Link></li>
                        <li><Link to="#">Kontaktai</Link></li>
                    </ul>
                </div>
                {/*---------- Users action buttons ----------*/}
                <div>
                    <ul className="flex gap-2">
                        <li ><Link to="#"><img className="w-7 hover-scale" src={bag} alt="bag" /></Link></li>
                        <li><Link to="#"><img className="w-7 hover-scale" src={heart} alt="heart" /></Link></li>
                    </ul>
                </div>
                {/*---------- Mobile menu ----------*/}
                <div>
                    <ul>
                        <li><Link to="#">Pagrindinis</Link></li>
                        <li><Link to="#">Apie mus</Link></li>
                        <li><Link to="#">Kolekcija</Link></li>
                        <li><Link to="#">Kontaktai</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}