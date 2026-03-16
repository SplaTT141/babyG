import arrow from "../../assets/img/arrow-left.svg"
import arrowDown from "../../assets/img/arrow-down.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export function AdminAddProductPage() {
    const navigate = useNavigate();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryOptions = ['Kelnės', 'Suknelės', 'Batai'];

     function handleClickSubmit(e) {
        e.preventDefault();
     }

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
                    <form onSubmit={handleClickSubmit} className="flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-4">

                            {/*---------- Product name ----------*/}
                            <div className="flex flex-col">
                                <label>Pavadinimas</label>
                                <input className="input" type="text" id="name" placeholder="pvz. Megztinis" />
                            </div>

                            {/*---------- Product category ----------*/}
                            <div className="flex flex-col relative">
                                <label>Kategorija</label>
                                <button 
                                    onClick={() => {setIsCategoryOpen(!isCategoryOpen)}} 
                                    className={`input text-start flex justify-between ${selectedCategory ? '' : 'text-gray italic'}`}>
                                    {selectedCategory || 'Pasirinkite...'}
                                    <img className="w-5" src={arrowDown} alt="arrow-down" />
                                </button>
                                { isCategoryOpen &&
                                    <div className="absolute top-16 w-full min-w-30 border border-orange rounded-lg bg-white shadow">
                                        {
                                            categoryOptions.map((option, index) => (
                                                <button
                                                    onClick={() => {
                                                        setIsCategoryOpen(false);
                                                        setSelectedCategory(option);
                                                    }} 
                                                    key={index} 
                                                    className="w-full text-left px-4 py-1 hover:bg-gray-100 rounded-lg"
                                                >
                                                    {option}
                                                </button>))
                                        }
                                    </div>
                                }
                            </div>
                            
                            {/*---------- Product age range  ----------*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}