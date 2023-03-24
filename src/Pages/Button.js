
import { useCount } from "../components/useCount"
import { useToggle } from "../components/useToggle"

const Button = () => {
    const [isVisible,toggle] = useToggle()
    const { count,increaseCount,decreaseCount,resetCount } = useCount();
  return (
      <div>
          <button onClick={toggle}>{isVisible?"Hide":"Show"} </button>
          {
              isVisible&&<h1>Context Showing</h1>
          }
          <div>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}> Decrease</button>
          <button onClick={resetCount}>Reset</button>
          </div>
          <div>
              <h1 style={{textAlign:"center"}}>{count}</h1>
          </div>

    </div>
  )
}

export default Button