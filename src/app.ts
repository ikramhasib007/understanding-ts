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