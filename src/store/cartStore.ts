import { create } from 'zustand'
import { Product } from '../data/products'

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, size: string, color: string, quantity?: number) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product, size, color, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => 
          item.product.id === product.id && 
          item.size === size && 
          item.color === color
      )
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id && item.size === size && item.color === color
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }
      
      return {
        items: [...state.items, { product, quantity, size, color }],
      }
    })
  },
  
  removeItem: (productId, size, color) => {
    set((state) => ({
      items: state.items.filter(
        (item) => 
          !(item.product.id === productId && item.size === size && item.color === color)
      ),
    }))
  },
  
  updateQuantity: (productId, size, color, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId, size, color)
      return
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      ),
    }))
  },
  
  clearCart: () => {
    set({ items: [] })
  },
  
  totalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },
  
  totalPrice: () => {
    return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  },
}))
