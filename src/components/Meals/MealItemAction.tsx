interface Props {
  quantity: number
  onAddItem: () => void
  onRemoveItem: () => void
}

const MealAction = ({ quantity, onAddItem, onRemoveItem }: Props) => {
  return (
    <>
      {quantity === 0 ? (
        <button onClick={onAddItem} className={`meal__action meal__action--add`}>
          <img src="images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      ) : (
        <div className={`meal__action meal__action--adjust`}>
          <button onClick={onRemoveItem}>
            <img src="images/icon-decrement-quantity.svg" alt="" />
          </button>
          <span>{quantity}</span>
          <button onClick={onAddItem}>
            <img src="/images/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      )}
    </>
  )
}

export default MealAction
