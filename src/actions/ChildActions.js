import { Actions } from "flummox";

export default class ChildActions extends Actions {
  constructor(flux) {
    super();

    this.flux = flux;
  }

  fetch(slug) {
    // return {
    //   val: 'Child Value'
    // };
    console.log('Child Async Begin');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Child Async Resolved');
        resolve({
          val: 'Child Value'
        });
      },2000)
    });
  }
}
