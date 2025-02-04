import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0)

    return (
      <div className="count_container">
        <p className="counnum">Count: {count}</p>
        <button className="counbtn" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="counbtn" onClick={() => setCount(0)}>Reset</button>
        <button className="counbtn" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
  }

export default Counter;