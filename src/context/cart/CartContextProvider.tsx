import { ReactNode, useReducer } from "react"
import { CartItemType, CartStateType } from "../../lib/types"
import cartReducer from "./cartReducer"
import { CartContext } from "./CartContext"

const initialCartState: CartStateType = {
  items: [],
  total: 0,
}

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [{ items, total }, dispatch] = useReducer(cartReducer, initialCartState)

  const addItem = (meal: CartItemType) => {
    dispatch({ type: "ADD", payload: meal })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  const clearItem = (id: string) => dispatch({ type: "CLEAR_ITEM", payload: id })

  const clearCart = () => dispatch({ type: "CLEAR", payload: null })

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        addItem,
        removeItem,
        clearItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
