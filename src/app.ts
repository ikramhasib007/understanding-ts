// Needs to enable "experimentalDecorators" and "es2016" on tsconfig.json file

function Logger(loggerMessge: string) {
  return function(constructor: Function) { // Decorator Factory { return as function }
    console.log(loggerMessge);
    console.log('constructor: ', constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const p = new constructor()
    const hookEl = document.getElementById(hookId)!
    hookEl.innerHTML = template;
    document.querySelector('h1')!.innerText = p.name;
  }
}


// @Logger('logger messages...')
@WithTemplate('<h1>My customized title</h1>', 'app')
class Person {
  name: string = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person()
console.log('pers: ', pers);