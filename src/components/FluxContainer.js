import assign from "object-assign";
import Flux from "flummox";
import FluxComponent from "flummox/component";
import React from "react";

const log = function(self, method, data) {
  console.log.apply(console, [
    `${self.props.component.displayName}Container.${method}`,
  ].concat(Array.prototype.slice.call(arguments, 2)));
};

export default React.createClass({
  displayName: "FluxContainer",

  contextTypes: {
    flux: React.PropTypes.instanceOf(Flux),
  },

  componentWillMount() {
    log(this, "componentWillMount");

    this.runActions(this.props.actions);
  },

  render() {
    log(this, "render");

    return (
      <FluxComponent connectToStores={this.props.stores} render={this.renderWithStores} />
    );
  },

  renderWithStores(state) {
    log(this, "renderWithStores", state)

    for (let key in state) {
      if (state[key] === undefined || state[key] === null) {
        log(this, "renderWithStores", "Missing Values. Skipping Render.");

        return null;
      }
    }

    log(this, "renderWithStores", state);

    return <this.props.component {...state} />
  },

  runActions(actions) {
    log(this, "runActions", actions);

    for (let name in actions) {
      const action = actions[name];

      action.call(this, this.context.flux.getActions(name));
    }
  },
});
