import { CART_ACTION_TYPES, CartStateType } from "../../lib/types"

export default function cartReducer(
  state: CartStateType,
  { type, payload }: CART_ACTION_TYPES
): CartStateType {
  switch (type) {
    case "ADD": {
      const updatedTotal = payload.price + state.total
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.mealId === payload.mealId
      )
      const existingCartItem = state.items[existingCartItemIndex]
      let updatedItems

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + payload.qty,
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        updatedItems = [...state.items, payload]
      }

      return {
        items: updatedItems,
        total: updatedTotal,
      }
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex((item) => item.mealId === payload)
      const existingItem = state.items[existingCartItemIndex]

      if (!existingItem) return state

      const updatedTotalAmount = state.total - existingItem.price

      let updatedItems
      if (existingItem.qty === 1) {
        updatedItems = state.items.filter((item) => item.mealId !== payload)
      } else {
        const updatedItem = { ...existingItem, qty: existingItem.qty - 1 }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }

      return {
        items: updatedItems,
        total: updatedTotalAmount,
      }
    }

    case "CLEAR_ITEM": {
      const itemToRemove = state.items.find((item) => item.mealId === payload)
      if (!itemToRemove) return state

      const updatedItems = state.items.filter((item) => item.mealId !== payload)
      const updatedTotal = state.total - itemToRemove.price * itemToRemove.qty

      return {
        total: updatedTotal,
        items: updatedItems,
      }
    }

    case "CLEAR": {
      return {
        total: 0,
        items: [],
      }
    }

    default:
      return state
  }
}
