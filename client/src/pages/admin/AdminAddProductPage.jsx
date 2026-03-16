import arrow from "../../assets/img/arrow-left.svg"
import arrowDown from "../../assets/img/arrow-down.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export function AdminAddProductPage() {
    const navigate = useNavigate();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryOptions = ['Kelnės', 'Suknelės', 'Batai'];

    const [isAgeOpen, setIsAgeOpen] = useState(false);
    const [selectedAge, setSelectedAge] = useState(null);
    const ageOptions = ['0-12 mėn', '1-3 metų', '4-7 metų'];

     function handleClickSubmit(e) {
        e.preventDefault();
     }

    return (
        <div className="mb-10">
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
                <div className="border bg-white border-gray-200 rounded-xl p-3 sm:py-10 hover:shadow">
                    <form onSubmit={handleClickSubmit}>
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
                                    <div className="absolute top-16 w-full min-w-30 border border-orange rounded-lg bg-white shadow z-20">
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
                            <div className="flex flex-col relative">
                                <label>Amžius</label>
                                <button 
                                    onClick={() => {setIsAgeOpen(!isAgeOpen)}} 
                                    className={`input text-start flex justify-between ${selectedAge ? '' : 'text-gray italic'}`}>
                                    {selectedAge || 'Pasirinkite...'}
                                    <img className="w-5" src={arrowDown} alt="arrow-down" />
                                </button>
                                { isAgeOpen &&
                                    <div className="absolute top-16 w-full min-w-30 border border-orange rounded-lg bg-white shadow z-10">
                                        {
                                            ageOptions.map((option, index) => (
                                                <button
                                                    onClick={() => {
                                                        setIsAgeOpen(false);
                                                        setSelectedAge(option);
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

                            {/*---------- Product description ----------*/}
                            <div className="flex flex-col">
                                <label>Aprašymas</label>
                                <input className="input" type="text" id="description" />
                            </div>

                            {/*---------- Product price ----------*/}
                            <div className="flex flex-col">
                                <label>Kaina €</label>
                                <input className="input" type="number" id="price" />
                            </div>

                            {/*---------- Product quantity ----------*/}
                            <div className="flex flex-col">
                                <label>Kiekis sandelyje vnt.</label>
                                <input className="input" type="number" id="quantity" />
                            </div>

                            <div className="flex justify-center gap-3">
                                <button className="font-bold bg-orange-500 px-3 py-2 rounded-lg hover:bg-orange-400">Patvirtinti</button>
                                <button className="font-bold px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-100">Atšaukti</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}