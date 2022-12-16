interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  public age = 33;
  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1 = new Person('Ikram')

user1.greet('Hi folks - I\'m')