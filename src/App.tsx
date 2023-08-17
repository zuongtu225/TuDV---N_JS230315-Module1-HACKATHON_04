import React from "react";
import Products from "./component/products";
import Rendercart from "./component/rendercart";

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <Products />
      </div>
      <div className="wrapper-right">
        <Rendercart />
      </div>
    </div>
  );
}

export default App;
