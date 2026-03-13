import product from "../../../public/img/product.png";

export function AdminProductsPage() {
    return (
        <div className="border bg-white border-gray-200 rounded-xl p-3 m-5">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="heading-h2">Prekės</h2>
                    <p className="paragraph mt-0">X produktų kataloge</p>
                </div>
                <button className="btn-orange m-0 w-35">+ Pridėti produktą</button>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="w-full">
                    <thead className="border-b border-orange">
                        <tr className="text-left">
                            <th>Nuotrauka</th>
                            <th className="px-3">Pavadinimas</th>
                            <th className="px-3">Kategorija</th>
                            <th className="px-3">Amžius</th>
                            <th className="px-3">Kaina</th>
                            <th className="px-3">Aktyvumas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className="w-20 rounded mt-2" src={product} alt="product" /></td>
                            <td className="px-3">text</td>
                            <td className="px-3">apranga</td>
                            <td className="px-3">6 - 12 menesiu</td>
                            <td className="px-3">39 eu</td>
                            <td className="px-3">X</td>
                        </tr>
                        <tr>
                            <td><img className="w-20 rounded mt-2" src={product} alt="product" /></td>
                            <td className="px-3">text</td>
                            <td className="px-3">apranga</td>
                            <td className="px-3">6 - 12 menesiu</td>
                            <td className="px-3">39 eu</td>
                            <td className="px-3">X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}