// Needs to enable "experimentalDecorators" and "es2016" on tsconfig.json file

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log('constructor: ', constructor);
}

@Logger
class Person {
  name: string = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person()
console.log('pers: ', pers);