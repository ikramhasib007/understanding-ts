class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) { // Shorthand Initialization
    // this.id = id;
    // this.name = n;
  }
  describe(this: Department) { // additional safety purposes
    console.log('Department is ', this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting');
console.log('accounting: ', accounting);
accounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
// accounting.employees.push('Julian')
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'New', describe: accounting.describe }
// accountingCopy.describe()