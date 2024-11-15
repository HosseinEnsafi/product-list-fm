import { createContext } from "react"
import { CartItemType, CartStateType } from "../../lib/types"

interface CartContextProps extends CartStateType {
  addItem: (meal: CartItemType) => void
  removeItem: (id: string) => void
  clearItem: (id: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextProps | null>(null)
