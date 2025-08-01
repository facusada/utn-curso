import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import styles from './Products.module.css'

export default function Products() {
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(productsList)
      } catch (error) {
        console.error('Error fetching products from Firestore:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <div className={styles.containerProducts}>
        <div className="flex justify-end mb-4 px-6">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-green-600 text-white hover:bg-green-700"
            style={{ width: 'fit-content' }}
          >
            + Crear producto
          </button>
        </div>
        <h2 className={styles.titulo}>Productos disponibles</h2>

        {/* Lista de productos */}
        <div className={styles.productList}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.productCard}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      <ProductModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}