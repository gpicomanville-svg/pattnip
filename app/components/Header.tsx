'use client'

import Image from 'next/image'
import { useCart } from '@/app/lib/cart'

export default function Header() {
  const { totalItems, toggleCart } = useCart()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Pattnip" width={110} height={110} className="object-contain" />
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: '🧶 Amigurumis', id: 'amigurumis' },
              { label: '🎮 Personajes', id: 'personajes' },
              { label: '🫧 Jabones', id: 'jabones' },
              { label: '🎨 Arcilla', id: 'arcilla' },
              { label: '✉️ Pedido Custom', id: 'custom-order' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Cart button */}
          <button
            onClick={toggleCart}
            className="relative flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
          >
            <span>🛒</span>
            <span>Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
