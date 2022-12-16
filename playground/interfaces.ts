// type AddFn = (n1: number, n2: number) => number;
interface AddFn { // interfaces as function types
  (n1: number, n2: number): number
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string; // optional
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  public age = 33;
  constructor(n?: string) {
    if(n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if(this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi...!');
    }
  }
}

let user1: Greetable;

user1 = new Person()
console.log('user1: ', user1);

user1.greet('Hi folks - I\'m')