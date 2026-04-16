'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '@/app/lib/products'

type CartItem = Product & { quantity: number }

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'UPDATE_QTY'; id: number; quantity: number }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CLEAR_CART' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        }
      }
      return { ...state, items: [...state.items, { ...action.product, quantity: 1 }], isOpen: true }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== action.id) }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQty: (id: number, quantity: number) => void
  toggleCart: () => void
  closeCart: () => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      addItem: (product) => dispatch({ type: 'ADD_ITEM', product }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      updateQty: (id, quantity) => dispatch({ type: 'UPDATE_QTY', id, quantity }),
      toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
