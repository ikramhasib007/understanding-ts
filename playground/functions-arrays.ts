const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Ikram',
  age: 34,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'Modarator']
}

console.log(person.role)

// function return types
function add(num1: number, num2: number): number {
  return num1 + num2
}

function printValues(num: number): void {
  console.log(num);
}

console.log(add(20, 30));

// Function types
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printValues;

console.log(combineValues(20, 20));

// Function types and callbacks
// function addAndHandle(n1: number, n2: number, cb: (num: number) => number): number {
//   let result = n1 + n2;
//   let res = cb(result)
//   return res
// }

// const myResult = addAndHandle(10, 20, (num) => {
//   console.log('num: ', num);
//   return num
// })

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2;
  cb(result)
}

const myResult = addAndHandle(10, 20, (num) => {
  console.log('num: ', num);
})

// let customerName: unknown;
// let customerFullname: string;

// customerFullname = 'Ikram Ud Daula';
// customerFullname = customerName; // Getting errors