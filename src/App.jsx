import React, { useState } from 'react';

const App = () => {
  const [count, setCount]  = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const onReset = () => setCount(0)
  const three = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    }
  };
  
  return (
    <React.Fragment>
    <div>
      count: {count}
    </div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <div>
    <button onClick={onReset}>Reset</button>
    <button onClick={three}>3の倍数の時だけ３で割る</button>
    </div>
    </React.Fragment>
  );
};

export default App;
