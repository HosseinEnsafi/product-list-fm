import { useCartContext } from "../../lib/hooks"
import { CartItemType } from "../../lib/types"

const CartItem = ({ item }: { item: CartItemType }) => {
  const { clearItem } = useCartContext()
  const totalPrice = (item.qty * item.price).toFixed(2)
  return (
    <div className="cart__item">
      <div>
        <h4 className="cart__item-title">{item.name}</h4>
        <div className="cart__item-stats">
          <span className="cart__item-qty">{item.qty}x</span>
          <span className="cart__item-price">${item.price}</span>
          <span className="cart__item-total">${totalPrice}</span>
        </div>
      </div>

      <img
        onClick={clearItem.bind(null, item.mealId)}
        className="cart__item-action"
        src="/images/icon-remove-item.svg"
      ></img>
    </div>
  )
}
export default CartItem
