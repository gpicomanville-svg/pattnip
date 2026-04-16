'use client'

import { motion } from 'framer-motion'
import { products, categories } from '@/app/lib/products'
import ProductCard from './ProductCard'

type Category = keyof typeof categories

export default function ProductSection({ category }: { category: Category }) {
  const info = categories[category]
  const filtered = products.filter(p => p.category === category)

  return (
    <section id={category} className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.span
            whileInView={{ scale: [0.5, 1.2, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl mb-4 block"
          >
            {info.emoji}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">{info.label}</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">{info.description}</p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
