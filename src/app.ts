// Needs to enable "experimentalDecorators" and "es2016" on tsconfig.json file

function Logger(loggerMessge: string) {
  return function(constructor: Function) { // Decorator Factory { return as function }
    console.log(loggerMessge);
    console.log('constructor: ', constructor);
  }
}

@Logger('logger messages...')
class Person {
  name: string = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person()
console.log('pers: ', pers);