// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostbyIdQuery } from "../redux/postsSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetPostbyIdQuery(5);

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {JSON.stringify(data)}
      <h1>Count is {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Increment by amount
      </button>
    </>
  );
}
