import React, { useState } from "react";

const App = () => {
  // const relatives=["Mama", "chachu","bro","sis","uncle"]
  const [relatives, setRelatives] = useState([
    "Mama",
    "chachu",
    "bro",
    "sis",
    "uncle",
  ]);
  return (
    <div id="main">
      <ol id={"relativeList"}>
        {relatives.map((relative, idx) => {
          return <li id={`relativeListItem${idx+1}`}>Name: {relative}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
