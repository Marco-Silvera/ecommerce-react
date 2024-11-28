import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'
import { API_URL } from '../utils'
import { ShoppingCartContext } from '../context'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export default function ProductDetailPage() {

    const { id } = useParams()
    const URL = `${API_URL}/products/${id}`;
    const { data, loading, error } = useFetch<IProduct>(URL);

    const context = useContext(ShoppingCartContext)

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error}</p>;

    const handleClick = () => {
        context.setCount(context.count + 1)
    }

    return (
        <div>
            <button onClick={handleClick} className='underline text-blue-500'>Agregar al carrito</button>
            <h3>{data?.title}</h3>
            <p>Cantidad de elementos en el carrito: {context.count}</p>
            <Link to={'/'}>Volver al inicio</Link>
        </div>
    )
}