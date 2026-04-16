'use client'

import { motion } from 'framer-motion'
import { Product } from '@/app/lib/products'
import { useCart } from '@/app/lib/cart'
import { useState } from 'react'

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div
        className="h-48 sm:h-52 flex items-center justify-center relative"
        style={{ backgroundColor: product.color + '33' }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-inner"
          style={{ backgroundColor: product.color + '66' }}
        >
          {product.emoji}
        </motion.div>
        <div className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-teal-500">
          Artesanal
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-black text-teal-600">{product.price}€</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-teal-500 hover:bg-teal-600 text-white hover:shadow-md'
            }`}
          >
            {added ? '✓ Añadido' : '+ Añadir'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
