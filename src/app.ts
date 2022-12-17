// Generics Types <>
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!')
  }, 1000)
})

promise.then((data) => {
  data.split(" ")
})

// Creating a Generic Function
// function merge(objA: object, objB: object) {
//   return Object.assign({}, objA, objB)
// }

// function merge<T, U>(objA: T, objB: U) { // return's conjunction of types
//   return Object.assign({}, objA, objB)
// }

// Working with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) { // make sure parametter is an object
  return Object.assign({}, objA, objB)
}
const mergedObj = merge({ name: 'Max' }, { age: 30 })
console.log(mergedObj.name);

// Another Generic function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if(element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if(element.length > 1) {
    descriptionText = `Got ${element.length} elements.`
  }
  return [element, descriptionText]
}
console.log(countAndDescribe(['Hi there!']));

// The keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value is ' + obj[key]
}

console.log(extractAndConvert({ name: 'Ikram'}, 'name'));

// Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem({name : 'Ikram'})
// textStorage.addItem({age: 'There...!'})
// textStorage.removeItem({name : 'Ikram'})
textStorage.addItem('Ikram')
textStorage.addItem('There...!')
textStorage.removeItem('Ikram')

console.log('textStorage: ', textStorage.getItems());