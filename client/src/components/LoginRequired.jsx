import logo from "../assets/img/logo-g.png"
import { Link } from "react-router-dom"

export function LoginRequired() {
    return (
        <main>
            <section  className="container mx-auto">
                <div className="flex flex-col items-center pt-7">
                    <div className="flex flex-col items-startt mt-5 bg-white p-5 rounded-xl w-full sm:w-100">
                        <img className="w-13 mb-5" src={logo} alt="logo" />
                        <div className="mb-3">
                            <h1 className="text-2xl font-bold mb-1">
                                Būtina prisijungti!
                            </h1>
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}