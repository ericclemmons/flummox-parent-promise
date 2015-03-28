import React from "react";

import flux from "../flux";

const Child = React.createClass({
  displayName: "Child",

  render() {

    return (
      <h4>{this.props.child.val}</h4>
    );
  }
});

export default flux.createContainer(Child, {
  actions: {
    Child: function(ChildActions) {
      ChildActions.fetch();
    },
  },

  stores: {
    Child: function(ChildStore) {
      return {
        child: ChildStore.getData(),
      };
    },
  },
});
