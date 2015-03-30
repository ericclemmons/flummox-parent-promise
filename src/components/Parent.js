import React from "react";
import flux from "../flux";

import Child from "../components/Child";

const Parent = React.createClass({
  displayName: "Parent",

  render() {
    if (!this.props.parent) {
      console.log("Parent.render", "waiting...");

      return <span>Waiting on <code>parent</code>...</span>;
    }

    console.log("Parent.render", "rendering...");

    return (
      <div>
        <h1>{this.props.parent.val}</h1>
        <Child />
      </div>
    );
  },
});


export default flux.createContainer(Parent, {
  actions: {
    Parent: function(ParentActions) {
      ParentActions.fetch();
    },
  },

  stores: {
    Parent: function(ParentStore) {
      return {
        parent: ParentStore.getData()
      };
    },
  },
});
