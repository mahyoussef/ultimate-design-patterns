package creational.builder.game_character

data class CharacterClass(val name: String, val startingSkills: List<Skill>)

// Builder class for CharacterClass
class CharacterClassBuilder {
    private var name: String? = null
    private var startingSkills: MutableList<Skill> = mutableListOf()

    fun name(name: String) = apply { this.name = name }
    fun addStartingSkill(skill: Skill) = apply { startingSkills.add(skill) }

    fun build(): CharacterClass {
        checkNotNull(name) { "CharacterClass must have a name!" }
        return CharacterClass(name!!, startingSkills)
    }
}