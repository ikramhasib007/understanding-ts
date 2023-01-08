// Needs to enable "experimentalDecorators" and "es2016" on tsconfig.json file

function Logger(loggerMessge: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) { // Decorator Factory { return as function }
    console.log(loggerMessge);
    console.log('constructor: ', constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function(constructor: any) {
    console.log('Rendering template...');
    const p = new constructor()
    const hookEl = document.getElementById(hookId)!
    hookEl.innerHTML = template;
    document.querySelector('h1')!.innerText = p.name;
  }
}


@Logger('logger messages...')  // 1
@WithTemplate('<h1>My customized title</h1>', 'app') // 2
// Decorator executes by bottom up pattern but function executes by general javascript styles
class Person {
  name: string = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person()
console.log('pers: ', pers);