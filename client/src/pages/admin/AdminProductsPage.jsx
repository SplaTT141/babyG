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
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th>Nuotrauka</th>
                            <th>Pavadinimas</th>
                            <th>Kategorija</th>
                            <th>Amžius</th>
                            <th>Kaina</th>
                            <th>Aktyvumas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className="w-20" src={product} alt="product" /></td>
                            <td>text</td>
                            <td>apranga</td>
                            <td>6 - 12 menesiu</td>
                            <td>39 eu</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}