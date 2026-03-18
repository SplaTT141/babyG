import arrow from "../../assets/img/arrow-left.svg"
import arrowDown from "../../assets/img/arrow-down.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { BACKEND_URL } from "../../config/env";

export function AdminAddProductPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const categoryOptions = ['Kelnės', 'Suknelės', 'Batai'];
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [isAgeOpen, setIsAgeOpen] = useState(false);
    const ageOptions = ['0-12 mėn', '1-3 metų', '4-7 metų'];
    const [selectedAge, setSelectedAge] = useState(null);

     function handleClickSubmit(e) {
        e.preventDefault();

        fetch(BACKEND_URL + '/api/products', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                name,
                category: selectedCategory,
                age: selectedAge,
                description,
                price: +price,
                quantity: +quantity,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
     }

    return (
        <div className="mb-10">
            <div className="flex items-center p-3 gap-4">
                <div>
                    <button type="button" onClick={() => {navigate('/admin/prekes')}}><img className="w-5" src={arrow} alt="arrow-left" /></button>
                </div>
                <div>
                    <h2 className="heading-h2">Pridėti naują produktą</h2>
                    <p className="paragraph mt-0">Užpildykite produkto informaciją</p>
                </div>
            </div>

            <div className="m-2">
                <div className="border bg-white border-gray-200 rounded-xl p-3 sm:py-10 hover:shadow">
                    <form onSubmit={handleClickSubmit}>
                        <div className="flex flex-col gap-4">

                            {/*---------- Product name ----------*/}
                            <div className="flex flex-col">
                                <label>Pavadinimas</label>
                                <input onChange={(e) => (setName(e.target.value))} className="input" type="text" id="name" placeholder="pvz. Megztinis" />
                            </div>

                            {/*---------- Product category ----------*/}
                            <div className="flex flex-col relative">
                                <label>Kategorija</label>
                                <button 
                                    type="button"
                                    onClick={() => {setIsCategoryOpen(!isCategoryOpen)}} 
                                    className={`input text-start flex justify-between ${selectedCategory ? '' : 'text-gray italic'}`}>
                                    {selectedCategory || 'Pasirinkite...'}
                                    <img className={`w-5 duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} src={arrowDown} alt="arrow-down" />
                                </button>
                                { isCategoryOpen &&
                                    <div className="absolute top-16 w-full min-w-30 border border-orange rounded-lg bg-white shadow z-20">
                                        {
                                            categoryOptions.map((option, index) => (
                                                <button
                                                    type="button"
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
                                    type="button"
                                    onClick={() => {setIsAgeOpen(!isAgeOpen)}} 
                                    className={`input text-start flex justify-between ${selectedAge ? '' : 'text-gray italic'}`}>
                                    {selectedAge || 'Pasirinkite...'}
                                    <img className={`w-5 duration-300 ${isAgeOpen ? 'rotate-180' : ''}`} src={arrowDown} alt="arrow-down" />
                                </button>
                                { isAgeOpen &&
                                    <div className="absolute top-16 w-full min-w-30 border border-orange rounded-lg bg-white shadow z-10">
                                        {
                                            ageOptions.map((option, index) => (
                                                <button
                                                    type="button"
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
                                <textarea onChange={(e) => (setDescription(e.target.value))} className="input" type="text" id="description" />
                            </div>

                            {/*---------- Product price ----------*/}
                            <div className="flex flex-col">
                                <label>Kaina €</label>
                                <input onChange={(e) => (setPrice(e.target.value))} className="input" type="number" id="price" />
                            </div>

                            {/*---------- Product quantity ----------*/}
                            <div className="flex flex-col">
                                <label>Kiekis sandelyje vnt.</label>
                                <input onChange={(e) => (setQuantity(e.target.value))} className="input" type="number" id="quantity" />
                            </div>
                            
                            {/*---------- Confirmation buttons ----------*/}
                            <div className="flex justify-center gap-3">
                                <button 
                                    className="
                                        font-bold bg-orange-500 px-3
                                        py-2 rounded-lg hover:bg-orange-400 
                                        cursor-pointer"
                                >
                                    Patvirtinti
                                </button>
                                <button 
                                    onClick={() => (navigate('/admin/prekes'))} 
                                    className="
                                        font-bold px-3 py-2 rounded-lg border
                                        border-gray-200 hover:bg-gray-100
                                        cursor-pointer"
                                >
                                    Atšaukti
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}