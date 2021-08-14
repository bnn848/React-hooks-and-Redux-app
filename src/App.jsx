import React, { useState, useEffect } from 'react';


  /**
   * (1)初期値をまとめてオブジェクトで定義する
   *    後述するApp.defaultPropsで初期値を記述
   */
  
  const App = (props) => {
    /**
     * (2)状態管理はHooksで記述する
     */
    const [state, setState] = useState(props) // 受け取ったpropsをまとめてuseStateで管理する
    const {name, price} = state; // まとめたstateを分割代入で取り出す

    /**
     * (3)useEffect
     *    DOMが描画された後に実行される
     *    componentDidMount,componentDidUpdateと同様の挙動をする
     *    第2引数に依存する関数やpropsを設定すると、依存関数が実行された場合にuseEffectを実行できる
     */
    useEffect(() => {
      console.log("useEffectが実行された")
    },[name]);
    
    const renderPeriod = () => {
      console.log("DOMが描画された")
      return'。'
    };
    
    return (
      <React.Fragment>
      <p>現在の{name}は、{price}です{renderPeriod()}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </React.Fragment>
  );
};


/**
 * (1)'
 * defaultPropsメソッドで初期値を定義できる
 * Appの引数にpropsとして渡すことで利用できる
 * App定義した後に記述する
 */
App.defaultProps = {
  name: 'サンプル',
  price: 1000
};

export default App;