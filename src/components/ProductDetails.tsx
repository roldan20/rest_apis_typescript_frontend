import { deleteProduct } from '../services/ProductService'
import type { Product } from '../types'
import { formatCurrency } from '../utils'
import { Form, useNavigate, type ActionFunctionArgs, redirect, useFetcher } from 'react-router-dom'

type ProductDetailsProps = {
  product: Product
}
export async function action({ params }: ActionFunctionArgs) {
  if(params.id !==undefined){
  await deleteProduct(+params.id)
    return redirect('/')
  }

}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.availability
  const navigate = useNavigate()
  const fetcher = useFetcher()
  return (
    <>
      <tr className="hover:bg-gray-50">

        <td className="px-6 py-4">{product.name}</td>
        <td className="px-6 py-4">{formatCurrency(product.price)}</td>
        <td className="px-6 py-4">
          <fetcher.Form method="POST">
            <button className={`${isAvailable ? 'text-black':'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
             type='submit' name='id' value={product.id}>
              {isAvailable ? 'Disponible' : 'No Disponible'}
            </button>
          </fetcher.Form>
        </td>
        <td ><div className='flex gap-2 items-center'> <button
          onClick={() => navigate(`/products/${product.id}/edit`)}
          className="bg-indigo-600 text-white text-center rounded-lg w-full p-2 uppercase font-bold text-xs"
        >
          Editar
        </button>
          <Form className='w-full' method='post' action={`products/${product.id}/delete`}
          onSubmit={(e)=>{
            if(!confirm('¿Deseas eliminar?')){
              e.preventDefault()
            }
          }}
          >
            <input
              type="submit"
              value='eliminar'
              className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
            />
          </Form>
        </div>
        </td>
      </tr>

    </>
  )
}
