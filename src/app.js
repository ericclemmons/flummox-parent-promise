import React from "react";

import Flux from "./flux";
import FluxComponent from "flummox/component";
import Parent from "./components/Parent.js"

const flux = new Flux();

React.render((
  <FluxComponent flux={flux}>
    <Parent/>
  </FluxComponent>
), document.getElementById('app'));
