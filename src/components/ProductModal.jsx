import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig.js'

import InputField from './InputField'
import styles from './ProductModal.module.css'

export default function ProductModal({ isOpen, onClose }) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  if (!isOpen) return null

  const handleSave = async () => {
    try {
      await addDoc(collection(db, 'products'), {
        title,
        price: parseFloat(price),
        image,
        description
      })
      alert('Producto creado con éxito 🚀')
      onClose()
    } catch (error) {
      console.error('Error al crear producto:', error)
      alert('Ocurrió un error al guardar el producto.')
    }
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Crear nuevo producto</h2>

        <InputField
          label="Título"
          placeholder="Nombre del producto"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <InputField
          label="Precio"
          type="number"
          placeholder="Precio en USD"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <InputField
          label="URL de imagen"
          placeholder="https://..."
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <InputField
          label="Descripción"
          placeholder="Breve descripción"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
          <button onClick={handleSave} className={styles.saveButton}>
            Guardar producto
          </button>
        </div>
      </div>
    </div>
  )
}