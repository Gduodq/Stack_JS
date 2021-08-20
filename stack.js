export class Stack {
  #stack;
  constructor(props) {
    this.#stack = [];
  }

  add = (el) => {
    this.#stack.push(el);
    return true;
  };

  pop = () => {
    if (!this.#stack.length) {
      console.warn("The stack is empty");
      return false;
    }
    return this.#stack.pop();
  };

  clearStack = () => {
    this.#stack = [];
    return true;
  };

  checkIfInStack = (el) => this.#stack.includes(el);

  isEmpty = () => !this.#stack.length;

  print = () => console.log(this.#stack);
}
