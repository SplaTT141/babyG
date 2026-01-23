import phone from "../assets/img/phone-orange.svg";
import mail from "../assets/img/mail-orange.svg";
import clock from "../assets/img/clock-orange.svg";
import instagram from "../assets/img/instagram-orange.svg";
import facebook from "../assets/img/facebook-orange.svg";

export function ContactPage() {

    const contactCards = [
        {
            name: 'Telefonas',
            img: phone,
            text: '+370 671 90356',
        },
        {
            name: 'El. paštas',
            img: mail,
            text: 'info@babyg.lt'
        },
        {
            name: 'Darbo laikas',
            img: clock,
            text: 'Pr-Pn: 9:00 - 18:00',
        },
    ]

    return (
        <main>
            <section className="container mx-auto">
                <div className=" mt-5 mb-10">
                    <h1 className="heading">Susisiekite su mumis</h1>
                    <p className="paragraph">Turite klausimų apie mūsų produktus ar paslaugas? Mielai jums padėsime! Susisiekite su mumis bet kuriuo patogiu būdu.</p>
                </div>
            </section>

            <section className="section-white">
                <div className="container mx-auto p-5">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-10">
                        <div className="lg:w-1/2">
                            <div className="flex flex-col">
                                <h2 className="heading-h2">Kontaktinė informacija</h2>
                                <p className="paragraph-h2 mb-5">Esame pasiruošę atsakyti į visus jūsų klausimus. Atsakome greitai ir draugiškai.</p>
                            </div>
                            <div className="grid gap-2 sm:grid-cols-2">
                            {
                                contactCards.map((card,index) => (
                                    <div className="card my-2 p-7 w-full items-start"key={index}>
                                        <div className="bg-amber-50 rounded-full p-3">
                                            <img className="w-7" src={card.img} alt={card.name} />
                                        </div>
                                        <h3 className="text-lg font-bold mt-3">{card.name}</h3>
                                        <p className="text-gray text-md mt-2">{card.text}</p>
                                    </div>
                                ))
                            }
                            {/*---------- Socials card ----------*/}
                                    <div>
                                        <div className="card my-2 p-7 w-full items-start">
                                            <div className="flex gap-2">
                                                <div className="bg-amber-50 rounded-full p-3">
                                                    <img className="w-7" src={facebook} alt="facebook" />
                                                </div>
                                                <div className="bg-amber-50 rounded-full p-3">
                                                    <img className="w-7" src={instagram} alt="instagram" />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold mt-3">Socialiniai tinklai</h3>
                                            <h4 className="text-md font-bold">Sekite mus: </h4>
                                            <a className="text-orange-600 hover-scale-md" href="https://www.instagram.com/babyg.lt" target="_blank">Instagram</a>
                                            <a className=" text-blue-500 hover-scale-md" href="https://www.facebook.com/profile.php?id=61573657997191" target="_blank">Facebook</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        {/*---------- "Message us" form ----------*/}
                        <div className="lg:w-1/2 mt-5 lg:mt-0">
                            <div className="border bg-white border-gray-200 rounded-xl p-3 hover:shadow">
                                <h2 className="heading-h2 mb-6">Parašykite mums</h2>
                                <form className="flex flex-col">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex flex-col w-full">
                                            <label htmlFor="name">Vardas</label>
                                            <input className="bg-gray-50 w-full py-1 px-3 rounded-md focus:outline-none mt-1 placeholder:italic" type="text" id="name" placeholder="Jūsų vardas" required/>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label htmlFor="email">El. paštas</label>
                                            <input className="bg-gray-50 w-full py-1 px-3 rounded-md focus:outline-none mt-1 placeholder:italic" type="email" id="email" placeholder="El. paštas" required/>
                                        </div>
                                    </div>
                                    <label htmlFor="theme">Tema</label>
                                    <input className="bg-gray-50 w-full py-1 px-3 rounded-md focus:outline-none mt-1 placeholder:italic" type="text" id="theme" placeholder="Žinutės tema"/>
                                    <label htmlFor="message">Žinutė</label>
                                    <textarea className="bg-gray-50 w-full py-1 px-3 rounded-md focus:outline-none mt-1 min-h-20 placeholder:italic" name="message" id="message" placeholder="Jūsų žinutė..."></textarea>
                                    <button type="submit" className="bg-orange-500 hover:brightness-120 text-white mt-5 w-full mx-auto py-1.5 rounded-xl cursor-pointer">Siųsti žinutę</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}