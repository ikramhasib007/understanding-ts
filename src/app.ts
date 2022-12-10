class Department {
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

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

const department = new Department('d1', 'Accounting');
console.log('department: ', department);
department.describe()

department.addEmployee('Max')
department.addEmployee('Manu')
// department.employees.push('Julian')
department.printEmployeeInformation()

// const departmentCopy = { name: 'New', describe: department.describe }
// departmentCopy.describe()

// Inheritance
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }
}

const it = new ITDepartment('d2', ['Max'])
it.addEmployee('Max')
it.addEmployee('Manu')
console.log('it: ', it);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() { // getter "get" for to publicly accessible private property
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.")
  }
  // setter & getter defination name maybe the same
  set mostRecentReport(value: string) { // setter "set" for to make publicly assignable private property
    if(!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if(employee === 'Max') {
      return;
    }
    this.employees.push(employee)
  }

  addReport(text: string): void {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports)
  }
}

const accounting = new AccountingDepartment('d3', [])

accounting.mostRecentReport = "John's salary" // general assign 

// accounting.addReport("Manu's salary")
// accounting.addReport("Max's salary")
console.log(accounting.mostRecentReport)
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
console.log('accounting: ', accounting);