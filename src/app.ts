// type AddFn = (n1: number, n2: number) => number;
interface AddFn { // interfaces as function types
  (n1: number, n2: number): number
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  public age = 33;
  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Ikram')
console.log('user1: ', user1);

user1.greet('Hi folks - I\'m')