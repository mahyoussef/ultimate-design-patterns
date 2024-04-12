import { Department } from "./department";
import { Employee } from "./employee";

const department = new Department();

const employee1 = new Employee("Mohamed Saad", 2000);
const employee2 = new Employee("Mahmoud Youssif", 3000);

department.addOrganizationUnit(employee1);
department.addOrganizationUnit(employee2);

console.log("Mohamed's Salary: ", employee1.calculateTotalSalary()); // 2000
console.log("Mahmoud's Salary: ", employee2.calculateTotalSalary()); // 3000
console.log("Total Department Salary: ", department.calculateTotalSalary()); // 5000
