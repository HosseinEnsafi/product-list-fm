export type CartItemType = {
  id: string
  mealId: string
  name: string
  qty: number
  price: number
}

export interface MealType {
  id: string
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

export interface CartStateType {
  items: CartItemType[]
  total: number
}

export type CART_ACTION_TYPES =
  | { type: "ADD"; payload: CartItemType }
  | { type: "REMOVE"; payload: string }
  | { type: "CLEAR_ITEM"; payload: string }
  | { type: "CLEAR"; payload: null }
