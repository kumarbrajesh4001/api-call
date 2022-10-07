import React, { useReducer } from "react";

const Reducer = () => {
  const initialstate = 0;
  const reducer = (stat, actio) => {
    if (actio.type === "inc") {
      return stat + 1;
    }

    if (actio.type === "dec") {
      return stat - 1;
    }
  };

  const [stat, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h2>{stat}</h2>
      <button
        onClick={() => {
          dispatch({ type: "inc", pay: 12 });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec", pay: 12 });
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default Reducer;
