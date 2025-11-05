class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  } 
  getDetails() {
    return `Employee ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}`;
  }
}

const emp1 = new Employee(101, "Vikas Dongre", 80000);

console.log(emp1.getDetails());

