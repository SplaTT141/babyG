import logo from "../assets/img/logo-g.png"
import lock from "../assets/img/lock-gray.svg"
import user from "../assets/img/user-gray.svg"
import { useState } from "react"
import { BACKEND_URL } from "../config/env.js"

export function LoginPage() {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`${BACKEND_URL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                usernameOrEmail,
                password,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {console.log(error)});
    }


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
                        <form onSubmit={handleSubmit} className="my-7">
                            <label className="text-md" htmlFor="">El. paštas arba slapyvardis</label>
                            <div className="flex bg-gray-50 p-2 rounded-md border  gap-3 border-white focus-within:border-orange-400">
                                <img className="w-5" src={user} alt="user" />
                                <input onChange={(e) => {setUsernameOrEmail(e.target.value)}} className="focus:outline-0 w-1/1" type="text" required/>
                            </div>
                            <label htmlFor="">Slaptažodis</label>
                            <div className="flex bg-gray-50 p-2 rounded-md border border-white focus-within:border-orange-400 mb-5 gap-3">
                                <img className="w-5" src={lock} alt="lock" />
                                <input onChange={(e) => {setPassword(e.target.value)}} className="focus:outline-0 w-1/1" type="password" required/>
                            </div>
                            <button type="submit" className="bg-orange-500 hover:brightness-120 text-white mt-5 w-full mx-auto py-1.5 rounded-xl cursor-pointer">Prisijungti</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}