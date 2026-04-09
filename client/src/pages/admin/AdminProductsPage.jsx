import dots from "../../assets/img/icons/dots.svg";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";
import { useEffect, useState } from "react";
import edit from "../../assets/img/icons/edit-pencil.svg";
import trash from "../../assets/img/icons/trash-red.svg";

export function AdminProductsPage() {
    const [productsData, setProductsData] = useState([]);
    const [activeRowId, setActiveRowId] = useState(null);

    useEffect(() => {
        fetch(BACKEND_URL + '/api/products', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setProductsData(data.products);
            }
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <div className="border bg-white border-gray-200 rounded-xl p-3 m-5">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="heading-h2">Prekės</h2>
                    <p className="paragraph mt-0">X produktų kataloge</p>
                </div>
                <Link to={'/admin/prekes/prideti'}><button className="btn-orange m-0 w-35">+ Pridėti produktą</button></Link>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="w-full min-w-200">
                    <thead className="border-b border-orange">
                        <tr className="text-center">
                            <th>#</th>
                            <th className="px-3">Pavadinimas</th>
                            <th className="px-3">Kategorija</th>
                            <th className="px-3">Amžius</th>
                            <th className="px-3">Kaina</th>
                            <th className="px-3">Aktyvumas</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                productsData.map((product) => (
                                    <tr key={product.id} className="text-center relative">
                                        <td>{product.id}</td>
                                        <td className="px-3">{product.name}</td>
                                        <td className="px-3">{product.category}</td>
                                        <td className="px-3">{product.age_range}</td>
                                        <td className="px-3">{product.price}</td>
                                        <td className="px-3">{product.is_active}</td>
                                        <td className="px-3 relative">
                                            <button
                                                onClick={() => setActiveRowId(product.id)}
                                                type="button" 
                                                className="
                                                    hover:bg-purple-300 rounded-xl
                                                    px-1 m-1 duration-200 cursor-pointer"
                                            >
                                                <img className="w-8" src={dots} alt="more" />
                                            </button>
                                        </td>
                                        {
                                            activeRowId === product.id && (
                                                <td 
                                                    className="
                                                        absolute top-10 right-10 md:right-15 
                                                        flex flex-col 
                                                        border border-orange rounded-xl
                                                        p-2 bg-white z-20"
                                                >
                                                    <button 
                                                        className="flex gap-1 cursor-pointer hover-scale-sm"
                                                    >
                                                        <img className="w-5" src={edit} alt="redaguoti" />
                                                        Redaguoti
                                                    </button>
                                                    <button 
                                                        className="flex gap-1 cursor-pointer text-red-600 hover-scale-sm"
                                                    >
                                                        <img className="w-5" src={trash} alt="panaikti" />
                                                        Ištrinti
                                                    </button>
                                                </td>
                                            )
                                        }
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}