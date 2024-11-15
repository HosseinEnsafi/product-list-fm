import { useContext } from "react"
import { CartContext } from "../context/cart/CartContext"

export const useCartContext = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error("useCurrentUser has to be used within <CartContext.Provider>")
  }

  return cartContext
}
