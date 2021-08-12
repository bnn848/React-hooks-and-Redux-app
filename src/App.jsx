import React, { useState } from 'react';

const App = () => {

  /**
   * (1)初期値をまとめてオブジェクトで定義する
   */
  const initialState = {
    name: 'サンプル',
    price: 1000
  };

  /**
   * (2)状態管理はHooksで記述する
   */
  const [name, setName] = useState(initialState.name)
  const [price, setPrice] = useState(initialState.price)
  
  return (
    <React.Fragment>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => {
        setPrice(initialState.price)
        setName(initialState.name)
      }}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </React.Fragment>
  );
};

export default App;
