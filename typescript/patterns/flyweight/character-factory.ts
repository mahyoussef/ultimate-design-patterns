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
