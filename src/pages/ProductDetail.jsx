import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error))
  }, [id])

  if (!product) return <p>Cargando...</p>

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>

        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '200px', objectFit: 'contain' }}
        />
        <p>{product.description}</p>
        <p style={{ fontWeight: 'bold', color: '#007bff' }}>${product.price}</p>
        <button
          onClick={() => navigate('/products')}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Volver
        </button>
      </div>
      <Footer />
    </>
  )
}