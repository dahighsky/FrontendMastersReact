import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="frog" breed="cute" />
      <Pet name="Dabloo" animal="dog" breed="sephard" />
      <Pet name="Pea" animal="Cock" breed="blue" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
