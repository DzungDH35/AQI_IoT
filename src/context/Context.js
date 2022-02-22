import React from "react";

const GlobalContext = React.createContext({
  api: [],
  setApi: () => {},
});

export default GlobalContext;