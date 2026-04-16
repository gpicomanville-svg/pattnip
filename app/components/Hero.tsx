'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-pink-50 py-16 sm:py-24 px-4">
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 text-3xl sm:text-4xl mb-6"
        >
          {['🧶', '🐰', '🫧', '🎨'].map((emoji, i) => (
            <motion.span
              key={emoji}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-4 leading-tight"
        >
          Hecho con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
            amor
          </span>
          , para ti 💚
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Amigurumis únicos, jabones artesanales y figuras de arcilla hechos a mano.
          Cada pieza es especial porque la creamos solo para ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('amigurumis')}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-teal-200 transition-all hover:-translate-y-1 active:scale-95"
          >
            Ver productos 🛍️
          </button>
          <button
            onClick={() => scrollTo('custom-order')}
            className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-200 transition-all hover:-translate-y-1 active:scale-95"
          >
            Pedir personalizado ✨
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
        >
          {[
            { emoji: '🧶', value: '100%', label: 'Hecho a mano' },
            { emoji: '🌿', value: 'Natural', label: 'Ingredientes' },
            { emoji: '💌', value: 'Único', label: 'Cada pieza' },
          ].map(({ emoji, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-3xl mb-1">{emoji}</span>
              <span className="text-2xl font-black text-teal-600">{value}</span>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
