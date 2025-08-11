import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function Counter2() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>This is Counter 2 </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
