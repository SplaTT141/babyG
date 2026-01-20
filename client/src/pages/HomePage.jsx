import star from "../assets/img/star.svg";
import kids from "../assets/img/kids3.png"
import baby from "../assets/img/baby.png"
import kid from "../assets/img/kid.png"
import toddler from "../assets/img/toddler.png"
import { Link } from "react-router-dom";

export function HomePage() {

        const ageCards = [
            {
                name: 'Kūdikis',
                age: '0-12 mėnesių',
                img: baby,
                nameColor: "purple",
                btnText:"Drabužiai kūdikiams",
            },
            {
                name: 'Mažylis',
                age: '1-2 metų',
                img: kid,
                nameColor: "orange",
                btnText:"Drabužiai mažyliams",
            },
            {
                name: 'Vaikas',
                age: '5-7 metų',
                img: toddler,
                nameColor: "yellow",
                btnText:"Drabužiai vaikams",
            },
        ]

    return (
        <main>
            {/*---------- Intro  section ----------*/}
            <section>
                <div className="container mx-auto sm:flex my-12">
                    <div className="flex flex-col items-center justify-center sm:w-2/5">
                        <h1 className="heading">Žavūs drabužiai patiems <span className="text-purple">mažiausiems</span></h1>
                        <p className="paragraph">Atraskite mūsų patogių, stilingų ir prieinamų drabužių kolekciją, skirtą kūdikiams ir vaikams.</p>
                        <button className="btn-gradient">Apsipirkti</button>

                        <div className="flex my-8 gap-3 text-center text-gray">
                            <div className="w-20">
                                <h3 className="text-purple text-2xl font-bold">100+</h3>
                                <p>Laimingų šeimų</p>
                            </div>
                            <div className="w-20">
                                <h3 className="text-orange text-2xl font-bold">70+</h3>
                                <p>Drabužių</p>
                            </div>
                            <div className="w-20">
                                <div  className="flex gap-2 justify-center">
                                    <h3 className="text-yellow text-2xl font-bold">4.9</h3>
                                    <img className="w-5" src={star} alt="star" />
                                </div>
                                <p>Reitingas</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center sm:w-3/5">
                        <img className="w-9/10 lg:w-7/10 rounded-xl object-cover" src={kids} alt="kids" />
                    </div>
                </div>
            </section>
            {/*---------- Age cards section ----------*/}
            <section className="bg-white pt-5">
                <div className="container mx-auto pb-5">
                    <h1 className="heading">Pirkite pagal amžių</h1>
                    <p className="paragraph">Išsirinkite tobulus drabužius kiekvienam jūsų vaiko augimo etapui.</p>
                    <div className="flex flex-col items-center justify-center sm:flex-row">
                    {
                        ageCards.map((age) => (
                                <div
                                     className="
                                        flex flex-col items-center mt-5 w-9/10 
                                        border border-gray-200 rounded-4xl py-8
                                        hover-scale-xl hover:shadow
                                        sm:w-1/3 sm:mx-2 md:mx-3"
                                    key={age.name}
                                >
                                    <img className="w-17.5 rounded-4xl" src={age.img} alt={age.name} />
                                    <h3 className={`text-${age.nameColor} text-2xl font-bold mt-7`}>{age.name}</h3>
                                    <p className="text-gray">{age.age}</p>
                                    <Link
                                        to="#"
                                        className="
                                            text-center mt-8 font-bold
                                            border border-gray-200 rounded-full py-2 w-8/10
                                            hover:bg-yellow transition-all duration-200">
                                        {age.btnText}
                                    </Link>
                                </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </main>
    )
}