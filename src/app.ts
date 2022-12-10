class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
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

const accounting = new Department('Accounting');
accounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
// accounting.employees.push('Julian')
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'New', describe: accounting.describe }
// accountingCopy.describe()