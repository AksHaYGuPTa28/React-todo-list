import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "react-observable-store";

Store.init({
  state: {
    tree: {
      id: "root",
      label: "Add Your Todos Here",
      items: [
        { id: "l1", label: "Todo1" },
        {
          id: "l2",
          label: "Todo2",
          items: [
            { id: "l21", label: "Todo2.1" },
            {
              id: "l22",
              label: "Todo2.2",
              items: [
                { id: "l211", label: "Todo2.2.1" },
                { id: "l212", label: "Todo2.2.2" },
                { id: "l213", label: "Todo2.2.3" },
              ],
            },
          ],
        },
        { id: "l3", label: "Todo3" },
      ],
    },
  },
});
ReactDOM.render(<App />, document.getElementById("root"));
