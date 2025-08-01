import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig.js'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() })
        } else {
          console.error('Producto no encontrado')
          navigate('/products')
        }
      } catch (error) {
        console.error('Error fetching product from Firestore:', error)
      }
    }

    fetchProduct()
  }, [id, navigate])

  if (!product) return <p>Cargando...</p>

  return (
    <>
      <Header />
      <div className={styles['product-detail-container']}>
        <h2 className={styles['product-detail-title']}>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className={styles['product-detail-image']}
        />
        <p className={styles['product-detail-description']}>{product.description}</p>
        <p className={styles['product-detail-price']}>${product.price}</p>

        <div className={styles['product-detail-buttons']}>
          <button
            onClick={() => navigate('/products')}
            className={`${styles['product-detail-button']} ${styles.back}`}
          >
            ← Volver
          </button>
          <button
            onClick={() => navigate(`/product/${product.id}/edit`)}
            className={`${styles['product-detail-button']} ${styles.edit}`}
          >
            ✏️ Editar
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}