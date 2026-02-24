import star from "../../assets/img/star.svg";
import kids from "../../assets/img/kids3.png"
import baby from "../../assets/img/baby.png"
import kid from "../../assets/img/kid.png"
import toddler from "../../assets/img/toddler.png"
import product from "../../assets/img/product.png"
import product2 from "../../assets/img/product2.png"
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
                age: '1-3 metų',
                img: kid,
                nameColor: "orange",
                btnText:"Drabužiai mažyliams",
            },
            {
                name: 'Vaikas',
                age: '4-7 metų',
                img: toddler,
                nameColor: "yellow",
                btnText:"Drabužiai vaikams",
            },
        ]
        
        const popularProducts = [
            {
                name: 'Suknelė',
                img: product,
                gender: 'Mergaitė',
                age: '1-3 metai',
                price: "13,99",
            },
            {
                name: 'Megztinis',
                img: product2,
                gender: 'Berniukas',
                age: '0-3 mėnesiai',
                price: "9,99",
            },
            {
                name: 'Suknelė',
                img: product,
                gender: 'Mergaitė',
                age: '1-3 metai',
                price: "13,99",
            },
            {
                name: 'Megztinis',
                img: product2,
                gender: 'Berniukas',
                age: '0-3 mėnesiai',
                price: "9,99",
            },
            {
                name: 'Suknelė',
                img: product,
                gender: 'Mergaitė',
                age: '1-3 metai',
                price: "13,99",
            },
            {
                name: 'Megztinis',
                img: product2,
                gender: 'Berniukas',
                age: '0-3 mėnesiai',
                price: "9,99",
            },
            {
                name: 'Suknelė',
                img: product,
                gender: 'Mergaitė',
                age: '1-3 metai',
                price: "13,99",
            },
            {
                name: 'Megztinis',
                img: product2,
                gender: 'Berniukas',
                age: '0-3 mėnesiai',
                price: "9,99",
            },
        ]

    return (
        <main>
            {/*---------- Intro  section ----------*/}
            <section>
                <div className="container md:w-4/5 mx-auto md:flex my-12">
                    <div className="flex flex-col items-center justify-center md:w-2/5">
                        <h1 className="heading">Žavūs drabužiai patiems <span className="text-purple">mažiausiems</span></h1>
                        <p className="paragraph">Atraskite mūsų patogių, stilingų ir prieinamų drabužių kolekciją, skirtą kūdikiams ir vaikams.</p>
                        <Link to={'/kolekcija'} className="block btn-gradient  md:mr-auto hover-scale-sm">Apsipirkti</Link>

                        <div className="flex my-8 gap-3 text-center text-gray dm:mr-auto">
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

                    <div className="flex justify-center md:w-3/5">
                        <img className="w-9/10 lg:w-7/10 rounded-xl object-cover" src={kids} alt="kids" />
                    </div>
                </div>
            </section>
            {/*---------- Age cards section ----------*/}
            <section className="section-white pt-5">
                <div className="container mx-auto pb-5">
                    <h1 className="heading">Pirkite pagal amžių</h1>
                    <p className="paragraph">Išsirinkite tobulus drabužius kiekvienam jūsų vaiko augimo etapui.</p>
                    <div className="flex flex-col items-center justify-center sm:flex-row">
                    {
                        ageCards.map((age) => (
                                <div
                                     className="
                                        card py-8 w-9/10
                                        hover-scale-sm hover:shadow
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
            {/*---------- Popular products section ----------*/}
            <section  className="section-white pt-5">
                    <div className="container mx-auto">
                        <h1 className="heading">Populiariausios prekės</h1>
                        <p className="paragraph mb-6">Atraskite mūsų populiariausias prekes, kurios derina komfortą ir stilių</p>
                        <div className="flex flex-col justify-center items-center pb-6 sm:flex-row sm:flex-wrap">
                            {
                                popularProducts.map((dress, index) => (
                                    <div 
                                        key={index}
                                        className="
                                        card cursor-pointer
                                        hover-scale-sm hover:shadow
                                        w-80 sm:mx-2 px-5 h-98"
                                    >
                                        <h2 className="text-md font-bold my-4">{dress.name}</h2>
                                        <div className="w-55">
                                            <img className="w-full h-44 rounded-xl object-cover" src={dress.img} alt={dress.name} />
                                        </div>
                                        <div className="flex flex-col w-full items-center">
                                            <p className="paragraph mt-2 mr-auto">{dress.gender}</p>
                                            <h3  className="text-sm mr-auto">{dress.age}</h3>
                                            <h2 className="text-orange mt-2 text-lg mr-auto">{dress.price}€</h2>
                                            <button 
                                                className="
                                                border border-gray-100 rounded-full
                                                w-9/10 py-1 my-4 transition-all duration-200 cursor-pointer
                                                font-bold hover:bg-purple hover:text-white">
                                                Pridėti į krepšelį
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            </section>
            {/*---------- Subscription section ----------*/}
            <section className="container mx-auto">
                <div className="flex flex-col items-center mt-5 mb-15">
                    <h1 className="heading">Likite informuoti!</h1>
                    <p className="paragraph">Gaukite išskirtinius pasiūlymus ir naujų prekių pranešimus tiesiai į savo el. paštą</p>
                    <div className="flex flex-col items-center bg-[#f7f1f6] rounded-2xl border border-gray-300 p-4 mt-5 text-center xl:w-1/2">
                        <input 
                            className="input bg-white"
                            placeholder="Įveskite savo elektroninį paštą"
                            type="email" 
                        />
                        <button type="submit" className="btn-gradient hover-scale-sm mb-3">Prenumeruoti</button>
                        <p className="text-gray">Jokio šlamšto, galite bet kada atsisakyti prenumeratos. Mes gerbiame jūsų privatumą.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}