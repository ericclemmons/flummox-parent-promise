import { Actions } from "flummox";

export default class ParentActions extends Actions {
  fetch(slug) {
    console.log("ParentActions.fetch", "start");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("ParentActions.fetch", "finish");

        resolve({ val: "Parent Value" });
      }, 1000);
    });
  }
}
