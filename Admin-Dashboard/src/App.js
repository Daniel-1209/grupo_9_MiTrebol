import React from "react";
import Routers from "./routers";
import Contex from "./context/ProviderDashboard";

const App = () => {
  return (
    <Contex>
      <Routers />
    </Contex>
  )
};

export default App;
