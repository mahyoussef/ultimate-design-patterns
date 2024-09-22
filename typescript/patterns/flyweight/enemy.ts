class Enemy implements Character {
  private displayName: string;
  private heathPoints: number;
  private attackPower: number;
  private weapon: Weapon;

  constructor(displayName: string, heathPoints: number, attackPower: number) {
    console.log("Creating a new enemy");

    this.displayName = displayName;
    this.heathPoints = heathPoints;
    this.attackPower = attackPower;
  }

  attack(): void {
    console.log(`
          A wild ${this.displayName} has appeared!
          It has ${
            this.weapon.getName().startsWith("a") ? "an" : "a"
          } ${this.weapon.getName()} that deals ${
      this.attackPower
    } points of damage plus ${this.weapon.getBonusDamage()} 
          `);
  }

  assignWeapon(weapon: Weapon): void {
    this.weapon = weapon;
  }
}
