'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/app/lib/cart'

const navItems = [
  { label: '🧶 Amigurumis', id: 'amigurumis' },
  { label: '🎮 Personajes', id: 'personajes' },
  { label: '🫧 Jabones', id: 'jabones' },
  { label: '🎨 Arcilla', id: 'arcilla' },
  { label: '✉️ Pedido Custom', id: 'custom-order' },
]

export default function Header() {
  const { totalItems, toggleCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Image src="/logo.png" alt="Pattnip" width={110} height={110} className="object-contain" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
            >
              <span>🛒</span>
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menú"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-gray-700 origin-center transition-all" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-gray-700" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-gray-700 origin-center transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-teal-100 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(id)}
                  className="text-left py-3 px-4 rounded-xl text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
