import Cart from "./components/Cart"
import Meals from "./components/Meals"

function App() {
  return (
    <>
      <section className="section container container__products">
        <main>
          <Meals />
        </main>
        <aside>
          <Cart />
        </aside>
      </section>
    </>
  )
}

export default App
