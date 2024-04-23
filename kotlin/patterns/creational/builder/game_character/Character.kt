package creational.builder.game_character

// Example using the builder pattern to create a complex character object for a game:
data class Character(
    val name: String,
    val race: Race,
    val characterClass: CharacterClass,
    val attributes: Attributes,
    val inventory: Inventory,
    val skills: List<Skill>
)

class CharacterBuilder {
    private var name: String? = null
    private var race: Race? = null
    private var characterClass: CharacterClass? = null
    private var attributes: Attributes? = null
    private var inventory: Inventory = Inventory()
    private var skills: MutableList<Skill> = mutableListOf()

    fun name(name: String) = apply { this.name = name }
    fun race(race: Race) = apply { this.race = race }
    fun characterClass(charClass: CharacterClass) = apply { this.characterClass = charClass }
    fun attributes(attributes: Attributes) = apply { this.attributes = attributes }
    fun addToInventory(item: Item) = apply { inventory.addItem(item) }
    fun addSkill(skill: Skill) = apply { skills.add(skill) }

    fun build(): Character {
        checkNotNull(name) { "Character must have a name!" }
        checkNotNull(race) { "Character must have a race!" }
        checkNotNull(characterClass) { "Character must have a class!" }
        checkNotNull(attributes) { "Character must have attributes!" }
        return Character(name!!, race!!, characterClass!!, attributes!!, inventory, skills.toList())
    }
}

