import React from "react";
import Products from "./component/products";
import Rendercart from "./component/rendercart";

function App() {
  const [call, setCall] = React.useState<boolean>(true);

  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <Products setCall={setCall} />
      </div>
      <div className="wrapper-right">
        <Rendercart call={call} setCall={setCall} />
      </div>
    </div>
  );
}

export default App;
