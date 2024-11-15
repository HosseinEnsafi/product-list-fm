import { useState } from "react"
import CartItem from "./CartItem"
import Modal from "../UI/Modal"
import CartEmpty from "./CartEmpty"
import OrderMeals from "./OrderMeals"
import { useCartContext } from "../../lib/hooks"

const Cart = () => {
  const [showOrder, setShowOrder] = useState(false)
  const { total, items } = useCartContext()

  const numOfItems = items.length
  const cartIsEmpty = numOfItems < 1

  const handleCheckoutClick = () => setShowOrder(true)
  const handleCloseModal = () => setShowOrder(false)

  return (
    <aside className="cart rounded">
      {cartIsEmpty && (
        <>
          <h3 className="cart__title">Your Cart (0)</h3>
          <CartEmpty />
        </>
      )}

      {!cartIsEmpty && (
        <>
          <h3 className="cart__title">Your Cart ({numOfItems})</h3>

          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="cart__total">
            <span>Order Total</span>
            <h4>${total.toFixed(2)}</h4>
          </div>

          <div className="cart__carbon">
            <img src="/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
            <p>This is a carbon-neutral delivery</p>
          </div>

          <button className="cart__confirm" onClick={handleCheckoutClick}>
            Confirm Order
          </button>

          {showOrder && (
            <Modal onClose={handleCloseModal}>
              <OrderMeals onClose={handleCloseModal} />
            </Modal>
          )}
        </>
      )}
    </aside>
  )
}

export default Cart
