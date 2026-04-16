'use client'

import { Product } from '@/app/lib/products'
import { useCart } from '@/app/lib/cart'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Product image area */}
      <div
        className="h-52 flex items-center justify-center text-7xl relative"
        style={{ backgroundColor: product.color + '33' }}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-inner"
          style={{ backgroundColor: product.color + '66' }}
        >
          {product.emoji}
        </div>
        <div
          className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: '#4ECDC4' }}
        >
          Artesanal
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-teal-600">{product.price}€</span>
          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              added
                ? 'bg-green-500 text-white scale-95'
                : 'bg-teal-500 hover:bg-teal-600 text-white hover:shadow-md'
            }`}
          >
            {added ? '✓ Añadido' : '+ Añadir'}
          </button>
        </div>
      </div>
    </div>
  )
}
