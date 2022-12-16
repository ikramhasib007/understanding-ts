type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee; // Intersection Types => conjuction of object from multiple types

let n1: ElevatedEmployee;

n1 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Intersection Types


// TYPE GUARDS
function add(a: Combinable, b: Combinable) {
  if(typeof a === 'string' && typeof b === 'string') { // Type Guards [typeof] run on runtime
    return a.toString() + b.toString()
  } else if(typeof a === 'number' && typeof b === 'number') { // Type Guards
    return a + b;
  }
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  if('privileges' in emp) { // Type Guards
    console.log('Privileges: ' + emp.privileges);
  } else if('startDate' in emp) { // Type Guards
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(n1)
printEmployeeInformation({name: 'Manu', startDate: new Date()})

// type guards for class [instanceof]

class Car {
  drive() {
    console.log('Driving a Car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if(vehicle instanceof Truck) { // Type Guards for class
    vehicle.loadCargo(1000)
  }
}
useVehicle(v1)
useVehicle(v2)

// DISCRIMINATED UNIONS
// Discriminated must have at least one common property
interface Bird {
  type: 'bird'; // common property and typed. that would be named [type] or [kind]
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // common property and typed. that would be named [type] or [kind]
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveForward(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveForward({ type: 'bird', flyingSpeed: 1000 })

// Type Casting
const inputElement = document.getElementById("text-input")! as HTMLInputElement; // Type Casting
inputElement.value = 'Hi there!'
