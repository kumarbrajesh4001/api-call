import React, { useContext } from "react";
import About from "./About";
import { LastName } from "./App";

function Home() {
  const lName = useContext(LastName);
  return (
    <div>
          <h3> { lName}</h3>
      <About />
    </div>
  );
}

export default Home;
