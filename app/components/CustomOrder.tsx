'use client'

import { useState } from 'react'

export default function CustomOrder() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    description: '',
    budget: '',
    deadline: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="custom-order" className="py-16 px-4 bg-gradient-to-br from-teal-50 to-pink-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">✨</span>
          <h2 className="text-4xl font-black text-gray-800 mb-3">Pedido Personalizado</h2>
          <p className="text-gray-500 text-lg">
            ¿Quieres algo único y especial? Cuéntanos tu idea y lo hacemos realidad
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mx-auto" />
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
            <div className="text-6xl mb-4">💌</div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">¡Mensaje enviado!</h3>
            <p className="text-gray-400">Te responderemos lo antes posible con todos los detalles.</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: '', description: '', budget: '', deadline: '' }) }}
              className="mt-6 text-teal-500 hover:text-teal-700 font-semibold transition-colors"
            >
              Hacer otro pedido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tu nombre *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="María García"
                  className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tu email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="maria@ejemplo.com"
                  className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de producto *</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700 bg-white"
              >
                <option value="">Selecciona una opción</option>
                <option value="amigurumi">🧶 Amigurumi / Animal de crochet</option>
                <option value="personaje">🎮 Personaje de ficción en crochet</option>
                <option value="jabon">🫧 Jabón artesanal personalizado</option>
                <option value="arcilla">🎨 Figura de arcilla</option>
                <option value="otro">✨ Otro (explícame)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cuéntanos tu idea *
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Ej: Quiero un amigurumi de mi perro salchicha, de unos 20cm, en color marrón claro con una camiseta azul..."
                className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Presupuesto aproximado</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700 bg-white"
                >
                  <option value="">Sin preferencia</option>
                  <option value="10-20">10€ - 20€</option>
                  <option value="20-40">20€ - 40€</option>
                  <option value="40-60">40€ - 60€</option>
                  <option value="60+">Más de 60€</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Para cuándo lo necesitas?</label>
                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 focus:border-teal-400 rounded-xl px-4 py-3 outline-none transition-colors text-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 transition-all hover:-translate-y-0.5"
            >
              Enviar pedido ✨
            </button>

            <p className="text-center text-xs text-gray-400">
              Te responderemos en menos de 24h con un presupuesto personalizado
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
