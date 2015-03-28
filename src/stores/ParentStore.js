import { Store } from "flummox";

class ParentStore extends Store {
  constructor(flux) {
    super();

    const ParentActions = flux.getActionIds("Parent");

    this.registerAsync(ParentActions.fetch, null, this.onFetch);
  }

  getData(slug) {
    return this.state;
  }

  onFetch(data) {
    this.setState(data);
  }
}

export default ParentStore;
