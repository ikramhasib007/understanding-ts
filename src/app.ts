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