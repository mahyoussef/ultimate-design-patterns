class Weapon {
  private name: string;
  private bonusDamage: number = 0;
  constructor(name: string, bonusDamage: number) {
    this.name = name;
    this.bonusDamage = bonusDamage;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getBonusDamage(): number {
    return this.bonusDamage;
  }
  setBonusDamage(bonusDamage: number): void {
    this.bonusDamage = bonusDamage;
  }
}
