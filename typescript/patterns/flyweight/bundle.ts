enum CharacterType {
  MAIN_PLAYER = "Main Player",
  WEAK_ENEMY = "Weak Enemy",
  STRONG_ENEMY = "Strong Enemy",
}

class CharacterFactory {
  private static cachedCharacters: Map<CharacterType, Character> = new Map();

  private constructor() {}

  static getPlayerOfType(characterType: CharacterType): Character {
    if (this.cachedCharacters.has(characterType)) {
      return this.cachedCharacters.get(characterType)!;
    }

    let character: Character | null = null;

    switch (characterType) {
      case CharacterType.MAIN_PLAYER: {
        character = new Player(CharacterType.MAIN_PLAYER);
        break;
      }
      case CharacterType.WEAK_ENEMY: {
        character = new Enemy(CharacterType.WEAK_ENEMY, 10, 1);
        break;
      }

      case CharacterType.STRONG_ENEMY: {
        character = new Enemy(CharacterType.STRONG_ENEMY, 30, 2);
        break;
      }
      default:
        throw new Error("Invalid character type");
    }

    this.cachedCharacters.set(characterType, character);
    return character;
  }
}

class Character {
  attack(): void {}
  assignWeapon(weapon: Weapon): void {}
}

// ####################################

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

// ####################################

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

// Example usage

const player = CharacterFactory.getPlayerOfType(CharacterType.MAIN_PLAYER);
player.assignWeapon(new Weapon("sword", 3));
player.attack();

const weakEnemy = CharacterFactory.getPlayerOfType(CharacterType.WEAK_ENEMY);
weakEnemy.assignWeapon(new Weapon("Dagger", 1));
weakEnemy.attack();

const strongEnemy = CharacterFactory.getPlayerOfType(
  CharacterType.STRONG_ENEMY,
);
strongEnemy.assignWeapon(new Weapon("axe", 2));
strongEnemy.attack();
