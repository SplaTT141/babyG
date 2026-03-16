import arrow from "../../assets/img/arrow-left.svg"
import arrowDown from "../../assets/img/arrow-down.svg"
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
                                <button className="input text-start text-gray flex justify-between">
                                    Pasirinkite...
                                    <img className="w-5" src={arrowDown} alt="arrow-down" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}