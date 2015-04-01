import { Store } from "flummox";

class ChildStore extends Store {
  constructor(flux) {
    super();

    const ChildActions = flux.getActionIds("Child");

    this.register(ChildActions.fetch, this.onFetch);
  }

  getData(slug) {
    return this.state;
  }

  onFetch(data) {
    this.setState(data);
  }
}

export default ChildStore;
