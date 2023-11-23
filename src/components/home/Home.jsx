import React, { useRef } from "react";
import { useAppStore } from "../../store/appStore";
import "./Home.css";

const Home = () => {
  const inputRef = useRef();
  const { count, username, increaseCount, decreaseCount, increaseCountByValue } = useAppStore((state) => {
    return {
      count: state.count,
      username: state.username,
      increaseCount: state.increaseCount,
      decreaseCount: state.decreaseCount,
      increaseCountByValue: state.increaseCountByValue,
    };
  });
  return (
    <div>
      <h1>Zustand</h1>
      <h2>{username}</h2>
      <p>{count}</p>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>

      <br />
      <input className="input-field" type="text" ref={inputRef} />
      <button onClick={() => increaseCountByValue(Number(inputRef.current.value))}>increaseCountByValue</button>
    </div>
  );
};

export default Home;
