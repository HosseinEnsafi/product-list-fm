import data from "../../assets/data.json"
import { MealType } from "../../lib/types"
import MealItem from "./MealItem"

const Meals = () => {
  const meals: MealType[] = data.meals

  return (
    <>
      <h2>Deserts</h2>
      <div className="container__meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </div>
    </>
  )
}

export default Meals
