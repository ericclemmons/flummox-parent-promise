import assign from "object-assign";
import Flux from "flummox";
import React from "react";

export default React.createClass({
  displayName: "FluxContainer",

  contextTypes: {
    flux: React.PropTypes.instanceOf(Flux),
  },

  componentDidMount() {
    this.runActions(this.props.actions);
  },

  componentWillMount() {
    this.listenToStores(this.props.stores);
  },

  componentWillUnmount() {
    this.unlistenToStores(this.props.stores);
  },

  getDefaultProps() {
    return {
      actions: {},
      stores: {},
    };
  },

  getInitialState() {
    const state = {
      flux: this.context.flux,
    };

    for (let name in this.props.stores) {
      const store = this.context.flux.getStore(name);
      const getStoreState = this.props.stores[name];

      assign(state, getStoreState.call(this, store));
    }

    // State is only set when all values exist
    for (let key in state) {
      if (state[key] === undefined || state[key] === null) {
        return null;
      }
    }

    return state;
  },

  listenToStores(stores) {
    for (let name in stores) {
      this.context.flux.getStore(name).addListener("change", this.updateState);
    }
  },

  render() {
    console.log("render", this.displayName, this.state);
    if (!this.state) {
      return this.props.children ? <section>{this.props.children}</section> : null;
    }


    return (
      <this.props.component {...this.state} />
    );
  },

  runActions(actions) {
    for (let name in actions) {
      const action = actions[name];

      action.call(this, this.context.flux.getActions(name));
    }
  },

  unlistenToStores(stores) {
    for (let name in stores) {
      this.context.flux.getStore(name).removeListener("change", this.updateState);
    }
  },

  updateState() {
    const nextState = this.getInitialState();

    if (!nextState) {
      return false;
    }

    this.setState(nextState);
  },
});
