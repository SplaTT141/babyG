import { Link } from "react-router-dom"

export function NotFoundPage() {
    return (
        <main>
            <section className="container mx-auto">
                <div className="flex flex-col justify-center items-center pt-15">
                    <div className="text-center">
                        <p className="text-7xl font-bold text-white">404</p>
                        <h1 className="
                            mt-4 text-4xl font-semibold text-gray-900 sm:text-6xl"
                        >
                            Puslapis nerastas
                        </h1>
                        <Link to={'/'}><button className="btn-orange w-50">Grįžti į pagrindinį puslapį</button></Link> 
                    </div>
                </div>
            </section>
        </main>
    )
}