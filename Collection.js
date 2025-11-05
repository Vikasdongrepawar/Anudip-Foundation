class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}`;
  }
}
const employees = [
  new Employee(101, "Vikas", 50000),
  new Employee(102, "Rohan", 60000),
  new Employee(103, "Priya", 55000)
];

const employeeDetails = employees.map(emp => emp.getDetails());

console.log(employeeDetails);
