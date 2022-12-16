interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Ikram',
  age: 33,

  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
}

user1.greet('Hi folks -')