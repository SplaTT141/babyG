import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/img/logo-g.png";
import { BACKEND_URL } from "../../config/env";

export function LogoutPage() {

    const {isLoggedIn, logout} = useContext(UserContext);
    const [message, setMessage] = useState({status: '', text: ''});
    const navigate = useNavigate();

    function handleLogoutClick() {
        
        fetch(BACKEND_URL + '/api/logout', {
            method: 'POST',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                logout();
                setMessage({status: 'success', text: data.message});
                
                setTimeout(() => {navigate('/')}, 1500)
            } else {
                setMessage({status: 'error', text: data.message});
            }
        })
        .catch((error) => {console.error(error)});
    }
 
    return (
        <main>
            <section  className="container mx-auto">
                <div className="flex flex-col items-center pt-7">
                    <div className="flex flex-col items-startt mt-5 bg-white p-5 rounded-xl w-full sm:w-100">
                        <img className="w-13 mb-5" src={logo} alt="logo" />
                        <div className="mb-3">
                            <h1 className="text-2xl font-bold mb-1">
                                {isLoggedIn ? 'Ar tikrai norite atsijungti?' : 'Jūs esate neprisijungęs'}
                            </h1>
                            {
                                isLoggedIn
                                ?
                                <button
                                    onClick={handleLogoutClick}
                                    className="
                                        bg-orange-500 hover:brightness-120 
                                        text-white mt-5 w-full mx-auto py-1.5 
                                        rounded-xl cursor-pointer"
                                >
                                    Atsijungti
                                </button>
                                :
                                <Link
                                    to={'/login'}
                                    className="
                                        flex justify-center
                                        bg-orange-500 hover:brightness-120 
                                        text-white mt-5 w-full mx-auto py-1.5 
                                        rounded-xl cursor-pointer"
                                >
                                    Prisijungti
                                </Link>
                            }
                        </div>
                        <div className="font-bold">
                                {message.status === 'success' && <div className="text-green-500">{message.text}</div>}
                                {message.status === 'error' && <div className="text-red-500">{message.text}</div>}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}