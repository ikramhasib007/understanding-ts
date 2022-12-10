class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) { // additional safety purposes
    console.log('Department is ', this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe()
const accountingCopy = { name: 'New', describe: accounting.describe }
accountingCopy.describe()