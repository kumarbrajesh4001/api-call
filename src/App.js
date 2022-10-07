import React, { useEffect, createContext } from "react";
import axios from "axios";
import Home from "./Home";
import "./App.css";
import Reducer from "./Reducer";

const FirstName = createContext();
const LastName = createContext();

function App() {
  useEffect(() => {
    /* OR */
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then(console.log);
    /* OR */
    // (async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const yu = await res.json();
    //   console.log(yu);
    // })();
    /* OR */

    // (async () => {
    //   const res1 = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    //   const res2 = axios.get(
    //     "https://jsonplaceholder.typicode.com/posts/1/comments"
    //   );
    //   const res = await Promise.all([res1, res2]);
    //   console.log([await res1, await res2])
    //   console.log(res);
    // })();

    // axios("https://jsonplaceholder.typicode.com/users").then((res) =>
    //   console.log(res)
    // );
  }, []);

  return (
    <div className="App">
      <FirstName.Provider value={"kumar"}>
        <LastName.Provider value={"brajesh"}>
          <Home />
        </LastName.Provider>
      </FirstName.Provider>
      <Reducer />
    </div>
  );
}

export { FirstName, LastName };
export default App;
