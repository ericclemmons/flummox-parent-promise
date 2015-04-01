import { Flummox } from "flummox";
import React from "react";

import QueuedDispatcher from "./queued-dispatcher";
import FluxContainer from "./components/FluxContainer";
import ParentActions from "./actions/ParentActions";
import ChildActions from "./actions/ChildActions";
import ParentStore from "./stores/ParentStore";
import ChildStore from "./stores/ChildStore";

class Flux extends Flummox {
  constructor() {
    super();

    this.dispatcher = new QueuedDispatcher();

    this.createActions("Parent", ParentActions);
    this.createActions("Child", ChildActions);

    this.createStore("Parent", ParentStore, this);
    this.createStore("Child", ChildStore, this);
  }
}

Flux.createContainer = function(Component, props) {
  return React.createClass({
    displayName: `${Component.displayName}Container`,

    render() {
      return (
        <FluxContainer component={Component} {...this.props} {...props} />
      );
    },
  });
};

export default Flux;
