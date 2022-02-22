import React, { useState } from "react";
import Context from "./Context";
import GlobalContext from "@context/Context";

export default function ContextWrapper(props) {
  const [api, setApi] = useState(null);
  return (
    <Context.Provider
      value={{ api, setApi }}
    >
      {props.children}
    </Context.Provider>
  );
}
