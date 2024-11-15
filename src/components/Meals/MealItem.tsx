import { useCartContext } from "../../lib/hooks"
import { MealType } from "../../lib/types"
import MealAction from "./MealItemAction"

const MealItem = ({ meal }: { meal: MealType }) => {
  const { items, addItem, removeItem } = useCartContext()
  const cartItem = items.find((item) => item.mealId === meal.id)
  const quantity = cartItem?.qty ?? 0
  return (
    <div className={`meal ${quantity > 0 ? "meal--active" : ""}`}>
      <picture>
        <source media="(min-width: 1200px)" srcSet={meal.image.desktop} />
        <source media="(min-width: 768px)" srcSet={meal.image.tablet} />
        <img className="meal__img rounded" src={meal.image.mobile} alt={meal.name} />
        <MealAction
          onAddItem={addItem.bind(null, {
            id: Date.now().toString(),
            mealId: meal.id,
            name: meal.name,
            price: meal.price,
            qty: 1,
          })}
          onRemoveItem={removeItem.bind(null, meal.id)}
          quantity={quantity}
        />
      </picture>
      <div className="meal__content">
        <p className="meal__category">{meal.category}</p>
        <h3 className="meal__title">{meal.name}</h3>
        <p className="meal__price">${meal.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
export default MealItem
