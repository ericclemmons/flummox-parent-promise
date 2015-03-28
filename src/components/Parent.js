import React from "react";
import flux from "../flux";

import Child from "../components/Child";

const Parent = React.createClass({
  displayName: "School",

  render() {
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
