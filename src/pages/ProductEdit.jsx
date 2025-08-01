import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import InputField from '../components/InputField'

export default function ProductEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({ title: '', price: '', description: '', image: '' })

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct(docSnap.data())
      } else {
        console.error('Producto no encontrado')
        navigate('/products')
      }
    }

    fetchProduct()
  }, [id, navigate])

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const docRef = doc(db, 'products', id)
      await updateDoc(docRef, product)
      navigate(`/product/${id}`)
    } catch (error) {
      console.error('Error actualizando producto:', error)
    }
  }

  return (
    <>
      <Header />
      <div style={{
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        marginTop: '2rem'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          fontWeight: '600',
          color: 'black'
        }}>
          ✏️ Editar producto
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputField
            label="Título"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
          <InputField
            label="Precio"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            placeholder="Precio en USD"
          />
          <InputField
            label="URL de imagen"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="https://..."
          />
          <InputField
            label="Descripción"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Descripción"
            type="textarea"
          />

          <div style={{ display: 'flex', gap: '10px'}}>
            <button
                type="button"
                onClick={() => navigate(`/product/${id}`)}
                style={{
                    marginBottom: '1rem',
                    padding: '10px',
                    fontSize: '14px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
                >
                ← Volver
            </button>
            <button
                type="submit"
                style={{
                padding: '10px',
                fontSize: '14px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
                }}
            >
                💾 Guardar cambios
            </button>
          </div>

        </form>
      </div>
      <Footer />
    </>
  )
}