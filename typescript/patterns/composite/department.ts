import { OrganizationUnit } from "./organization-unit";

export class Department implements OrganizationUnit {
  private organizationUnits: OrganizationUnit[];

  constructor() {
    this.organizationUnits = [];
  }

  addOrganizationUnit(organizationUnit: OrganizationUnit): void {
    this.organizationUnits.push(organizationUnit);
  }

  calculateTotalSalary(): number {
    return this.organizationUnits.reduce(
      (total, unit) => total + unit.calculateTotalSalary(),
      0
    );
  }
}
