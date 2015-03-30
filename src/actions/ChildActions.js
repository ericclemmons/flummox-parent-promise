import { Actions } from "flummox";

export default class ChildActions extends Actions {
  fetch(slug) {
    console.log("ChildActions.fetch", "start");

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("ChildActions.fetch", "finish");

        resolve({ val: 'Child Value' });
      }, 500)
    });
  }
}
