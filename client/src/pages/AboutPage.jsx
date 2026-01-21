import logo from "../assets/img/logo-g.png"

export function AboutPage() {
    return (
        <main>
            <section className="container mx-auto py-12 px-4">
                <div className="flex flex-col items-center gap-10 md:flex-row lg:items-start">

                    <div className="w-9/10 md:order-2 lg:mt-3">
                        <span className="bg-white rounded-full p-3 mb-10">Apie BabyG</span>
                        <h1 className="heading mt-5 text-start">Prekiaujame su meile atrinktais drabužiais mažiausiems</h1>
                        <p className="paragraph text-start">
                            Jau daugiau nei 3 metus prekiaujame kokybiškais ir patogiais drabužiais Lietuvos mažyliams. Kruopščiai atrenkame kiekvieną gaminį, kad jis būtų ne tik stilingas, bet ir patogus kasdieniams žaidimams bei nuotykiams. Mūsų tikslas – kad kiekvienas vaikas jaustųsi laimingas, patogiai judėtų ir atrodytų nuostabiai. Siekiame, kad tėvai galėtų drąsiai rinktis drabužius, žinodami, jog jų mažyliai vilki saugius, patikimus ir ilgaamžius gaminius.
                        </p>
                    </div>

                    <div 
                        className="
                            border border-white rounded-2xl
                            w-8/10 aspect-square relative
                            bg-[linear-gradient(135deg,#fbc2eb,#cdb8e3,#fceabb)] 
                            md:order-1 md:w-full  lg:w-8/10 xl:w-5/10"
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
                </div>
            </section>
        </main>
    )
}