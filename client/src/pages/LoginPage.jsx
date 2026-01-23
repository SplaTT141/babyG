import logo from "../assets/img/logo-g.png"
import mail from "../assets/img/mail-gray.svg"
import lock from "../assets/img/lock-gray.svg"


export function LoginPage() {
    return (
        <main>
            <section  className="container mx-auto">
                <div className="flex flex-col items-center pt-7">
                    <div className="flex flex-col items-startt mt-5 bg-white p-5 rounded-xl w-full sm:w-100">
                        <img className="w-13 mb-5" src={logo} alt="logo" />
                        <div className="mb-3">
                            <h1 className="text-2xl font-bold mb-1">Sveiki sugrįžę!</h1>
                            <p className="text-gray text-lg">Prisijunkite prie savo paskyros</p>
                        </div>
                        <form className="my-7">
                            <label className="text-md" htmlFor="">El. paštas</label>
                            <div className="flex bg-gray-50 p-2 rounded-md gap-3 border border-white focus-within:border-orange-400 mb-5">
                                <img className="w-5" src={mail} alt="mail" />
                                <input className="focus:outline-0" type="email" required/>
                            </div>
                            <label htmlFor="">Slaptažodis</label>
                            <div className="flex bg-gray-50 p-2 rounded-md gap-3 border border-white focus-within:border-orange-400 mb-5">
                                <img className="w-5" src={lock} alt="lock" />
                                <input className="focus:outline-0" type="password" required/>
                            </div>
                            <button type="submit" className="bg-orange-500 hover:brightness-120 text-white mt-5 w-full mx-auto py-1.5 rounded-xl cursor-pointer">Prisijungti</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}