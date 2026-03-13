import arrow from "../../assets/img/arrow-left.svg"
import { useNavigate } from "react-router-dom"

export function AdminAddProductPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center p-3 gap-4">
                <div>
                    <button onClick={() => {navigate(-1)}}><img className="w-5" src={arrow} alt="arrow-left" /></button>
                </div>
                <div>
                    <h2 className="heading-h2">Pridėti naują produktą</h2>
                    <p className="paragraph mt-0">Užpildykite produkto informaciją</p>
                </div>
            </div>
            <div className="m-2">
                <div className="border bg-white border-gray-200 rounded-xl p-3 hover:shadow">
                    <form className="flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col">
                                <label>Pavadinimas</label>
                                <input className="input" type="text" id="name" placeholder="pvz. Megztinis" required/>
                            </div>
                            <div className="flex flex-col">
                                <label>Kategorija</label>
                                <select className="input text-gray">
                                    <option value="">Pasirinkite...</option>
                                    <option value="">Megztinis</option>
                                    <option value="">Suknele</option>
                                    <option value="">Kostiumas</option>
                                    <option value="">Kelnes</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label>Kategorija</label>
                                <button className="input text-start text-gray">Pasirinkite...</button>
                            </div>
                            
                        </div>
                        {/* <label htmlFor="theme">Tema</label>
                        <input className="input" type="text" id="theme" placeholder="Žinutės tema"/>
                        <label htmlFor="message">Žinutė</label>
                        <textarea className="input min-h-20" name="message" id="message" placeholder="Jūsų žinutė..."></textarea>
                        <button type="submit" className="btn-orange">Pridėti</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}