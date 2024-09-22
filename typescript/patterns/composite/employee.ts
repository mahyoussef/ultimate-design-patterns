import { OrganizationUnit } from "./organization-unit";

export class Employee implements OrganizationUnit {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    calculateTotalSalary(): number {
        return this.salary;
    }
}
