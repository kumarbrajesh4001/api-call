import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

function About() {

    const name = useContext(FirstName);
    const nam = useContext(LastName);
    
  return (
    <div>
          <h3>{name} { nam}</h3>
    </div>
  );
}

export default About;
