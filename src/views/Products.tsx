import { Link, useLoaderData, type ActionFunctionArgs } from "react-router-dom";
import { getProducts, updateProductAvailability } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import type { Product } from "../types";

export async function loader() {
  const products = await getProducts()
  return products
}
export async function action({request}:ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  
  await updateProductAvailability(+data.id)
  return {}
}
export default function Products() {
  const products = useLoaderData() as Product[]

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Productos
        </h2>
        <Link to="products/new" className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500">
          Agregar producto
        </Link>
      </div>

      <div className="overflow-x-auto pt-5">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-800 text-white">
            <tr>

              <th scope="col" className="px-6 py-3 font-medium">Nombre</th>
              <th scope="col" className="px-6 py-3 font-medium">Precio</th>
              <th scope="col" className="px-6 py-3 font-medium">Disponible</th>
              <th scope="col" className="px-6 py-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(product => (
              <ProductDetails key={product.id} product={product} />
            ))}


          </tbody>
        </table>
      </div>

    </>
  )
}