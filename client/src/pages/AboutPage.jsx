import logo from "../assets/img/logo-g.png"
import heart from "../assets/img/heart-orange.svg"
import medal from "../assets/img/medal.svg"
import group from "../assets/img/group.svg"
import leaf from "../assets/img/leaf.svg"

export function AboutPage() {

    const values = [
        {
            name: "Meilė mažyliams",
            img: heart,
            text: "Kiekvienas mūsų drabužis parinktas su meile ir rūpesčiu jūsų vaikams."
        },
        {
            name: "Kokybė",
            img: medal,
            text: "Naudojame tik aukščiausios kokybės, sertifikuotus produktus"
        },
        {
            name: "Šeima",
            img: group,
            text: "Esame šeimos verslas, suprantantis tėvų poreikius."
        },
        {
            name: "Meilė mažyliams",
            img: leaf,
            text: "Rūpinamės aplinka ir prekiaujame ekologiška produkcija."
        },
    ]

    return (
        <main>
            <section className="container mx-auto p-12 px-4 sm:w-9/10">
                <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">


                    <div 
                        className="
                            border border-white rounded-2xl
                            w-8/10 aspect-square relative
                            bg-[linear-gradient(135deg,#fbc2eb,#cdb8e3,#fceabb)] 
                            shadow-md lg:w-1/3"
                    >
                        <img 
                            className="
                                absolute bottom-1/2 right-1/2
                                translate-x-1/2 translate-y-1/2
                                w-1/5 animate-bounce"
                            src={logo}
                            alt="logo"
                        />
                    </div>

                    <div className="w-9/10 lg:w-2/5">
                        <span className="bg-white rounded-full p-3 mb-10">Apie BabyG</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 text-start">Prekiaujame su meile atrinktais drabužiais mažiausiems</h2>
                        <p className="paragraph text-start">
                            Jau daugiau nei 3 metus prekiaujame kokybiškais ir patogiais drabužiais Lietuvos mažyliams. Kruopščiai atrenkame kiekvieną gaminį, kad jis būtų ne tik stilingas, bet ir patogus kasdieniams žaidimams bei nuotykiams. Mūsų tikslas – kad kiekvienas vaikas jaustųsi laimingas, patogiai judėtų ir atrodytų nuostabiai. Siekiame, kad tėvai galėtų drąsiai rinktis drabužius, žinodami, jog jų mažyliai vilki saugius, patikimus ir ilgaamžius gaminius.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-7 pb-10">
                <div className="container mx-auto w-9/10">
                    <h1 className="heading">Mūsų vertybės</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center">
                        {
                            values.map((value, index) => (
                                <div className="card w-70 p-7 text-center" key={index}>
                                    <div className="bg-amber-50 rounded-full p-3">
                                        <img src={value.img} alt={value.name} />
                                    </div>
                                    <h3 className="text-lg font-bold mt-3">{value.name}</h3>
                                    <p className="text-gray text-sm mt-2">{value.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="bg-white pt-10 pb-10">
                <div className="grid grid-cols-2 gap-y-5 gap-1 sm:grid-cols-4 place-items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-purple text-2xl font-bold">100+</h2>
                        <p className="text-gray text-lg">Laimingų klientų</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-orange text-2xl font-bold">70+</h2>
                        <p className="text-gray text-lg">Drabužių modelių</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-yellow text-2xl font-bold">4.9</h2>
                        <p className="text-gray text-lg">Vidutinis įvertinimas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-purple text-2xl font-bold">3+</h2>
                        <p className="text-gray text-lg">Metų patirtis</p>
                    </div>
                </div>
            </section>
        </main>
    )
}