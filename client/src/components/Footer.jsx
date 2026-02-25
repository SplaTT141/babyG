import logo from "../assets/img/logo-g.png";
import phone from "../assets/img/phone.svg";
import mail from "../assets/img/mail.svg";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-[#24212c] text-white pb-4 absolute bottom-0 w-full">
            <div className="sm:container sm:mx-auto sm:px-4 sm:w-9/10">
                <div className="sm:flex sm:justify-between">
                    <div className="flex items-center gap-2 pt-4 p-2 w-full sm:w-1/3 sm:flex-col sm:items-start">
                        <img className="w-15" src={logo} alt="logo" />
                        <p className="text-[#CDCDCD] text-base">Kuriame magiškas akimirkas su gražiais ir patogiais drabužiais Jūsų mažyliams.</p>
                    </div>

                    <div className="flex justify-around mt-2 px-4 sm:w-2/3">
                        <div>
                            <h4 className="text-xl mb-3">Prekės</h4>
                            <ul className="text-[#CDCDCD]">
                                <li className="hover-scale-md"><Link to="#">Kūdikiams</Link></li>
                                <li className="hover-scale-md"><Link to="#">Mažyliams</Link></li>
                                <li className="hover-scale-md"><Link to="#">Vaikams</Link></li>
                                <li className="hover-scale-md"><Link to="#">Išpardavimas</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-xl mb-3">Kontaktai</h4>
                            <ul>
                                <li className="hover-scale-md"><a className="flex gap-3 mb-2" href="tel:+37067190356"><img className="w-5" src={phone} alt="phone" />(+370) 67190356</a></li>
                                <li className="hover-scale-md"><a className="flex gap-3" href="mailto:info@babyg.lt"><img className="w-5" src={mail} alt="mail" />info@babyg.lt</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}