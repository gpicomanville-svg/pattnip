'use client'

import { useCart } from '@/app/lib/cart'

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalItems, totalPrice, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-teal-500 text-white">
          <h2 className="text-xl font-black">🛒 Mi Carrito ({totalItems})</h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-6xl mb-4">🛒</div>
              <p className="font-medium">Tu carrito está vacío</p>
              <p className="text-sm mt-1">¡Añade algo bonito!</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: item.color + '44' }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-teal-600 font-bold">{item.price}€</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-gray-600 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-teal-100 hover:bg-teal-200 flex items-center justify-center font-bold text-teal-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-600 transition-colors text-lg"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Total</span>
              <span className="text-3xl font-black text-teal-600">{totalPrice.toFixed(2)}€</span>
            </div>
            <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-200 transition-all hover:-translate-y-0.5">
              Hacer pedido 💚
            </button>
            <button
              onClick={clearCart}
              className="w-full text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
