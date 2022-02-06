import React from "react";
import Tree from "./Tree";
import withDragDropContext from "./DragNDropContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <Tree />
      </div>
    );
  }
}

export default withDragDropContext(App);
