import { products, categories } from '@/app/lib/products'
import ProductCard from './ProductCard'

type Category = keyof typeof categories

export default function ProductSection({ category }: { category: Category }) {
  const info = categories[category]
  const filtered = products.filter(p => p.category === category)

  return (
    <section id={category} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">{info.emoji}</span>
          <h2 className="text-4xl font-black text-gray-800 mb-3">{info.label}</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{info.description}</p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto" />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
