import product from "../assets/img/product.png"
import product2 from "../assets/img/product2.png"

export function CollectionPage() {
    const filterBtns = [
        {text: "Visos prekės"},
        {text: "Kūdikiams (0-12 mėn.)"},
        {text: "Mažyliams (1-3 m.)"},
        {text: "Vaikams (4-7 m.)"},
        {text: "Mergaitėms"},
        {text: "Berniukams"},
    ]
            
    const products = [
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
            <section className="container mx-auto">
                <div className="mt-5 mb-10">
                    <h1 className="heading">Mūsų kolekcija</h1>
                    <p className="paragraph">Atraskite mūsų platų asortimentą kokybiškų drabužių kūdikiams ir vaikams. Kiekvienas drabužis sukurtas mąstant apie jūsų vaiko komfortą ir stilių.</p>
                </div>
            </section>
            <section className="section-white">
                <div className="container mx-auto ">
                    <div className="flex flex-wrap gap-3 justify-center items-center py-5">
                        {
                            filterBtns.map((btn, index) => (
                                <button
                                    key={index}
                                    className="
                                        border border-gray-300 rounded-2xl py-1 px-3
                                        cursor-pointer transition-all duration-200 hover:bg-purple-300 
                                        focus:bg-orange-400 focus:text-white focus:border-white"
                                    type="button">
                                    {btn.text}
                                </button>
                            ))
                        }
                    </div>
                    <p className="paragraph">Rasta prekių: 1</p>
                    <div className="flex flex-col justify-center items-center pb-6 sm:flex-row sm:flex-wrap">
                        {
                            products.map((dress, index) => (
                                <div 
                                    key={index}
                                    className="
                                    card cursor-pointer
                                    hover-scale-sm hover:shadow
                                    w-60 sm:mx-2 px-5 h-98"
                                >
                                    <h2 className="text-md font-bold my-4">{dress.name}</h2>
                                    <div className="w-50">
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
        </main>
    )
}