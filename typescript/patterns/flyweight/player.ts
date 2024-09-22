class Player implements Character {
  private displayName: string;
  private heathPoints: number = 100;
  private attackPower: number = 2;
  private weapon: Weapon;

  constructor(displayName: string) {
    console.log("Creating a new player");

    this.displayName = displayName;
  }

  attack(): void {
    console.log(`
          ${this.displayName}
          has ${
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
