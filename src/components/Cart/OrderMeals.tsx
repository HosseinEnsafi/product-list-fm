import { useCartContext } from "../../lib/hooks"
import data from "../../assets/data.json"
import { MealType } from "../../lib/types"

const OrderMeals = ({ onClose }: { onClose: () => void }) => {
  const { items, total, clearCart } = useCartContext()
  const meals: MealType[] = data.meals

  return (
    <div className="order-meals">
      <img className="order-meals__check-img" src="images/icon-order-confirmed.svg" alt="" />

      <h2 className="order-meals__title">Order Confirmed</h2>
      <p className="order-meals__subtitle">We hope you enjoy the food!</p>

      <div className="order-meals__summary">
        <ul className="order-meals__list">
          {items.map((item) => (
            <>
              <li key={item.id} className="order-meals__item">
                <div className="order-meals__item-left">
                  <img
                    src={meals.find((meal) => meal.id === item.mealId)?.image.thumbnail}
                    alt="meal logo"
                    className="order-meals__item-image"
                  />
                  <div className="order-meals__item-content">
                    <p className="order-meals__item-name">{item.name}</p>
                    <div className="order-meals__item-quantity-price">
                      <span className="order-meals__item-quantity">{item.qty}x</span>
                      <span className="order-meals__item-price">${item.price}</span>
                    </div>
                  </div>
                </div>

                <div className="order-meals__item-right">
                  <p className="order-meals__item-total-price">
                    ${(item.qty * item.price).toFixed(2)}
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
        <div className="order-meals__total">
          <p className="order-meals__total-label">Order Total</p>
          <h4 className="order-meals__total-price">${total}</h4>
        </div>
      </div>

      <button
        className="order-meals__button"
        onClick={() => {
          onClose()
          clearCart()
        }}
      >
        Start New Order
      </button>
    </div>
  )
}
export default OrderMeals
