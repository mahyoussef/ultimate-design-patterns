package creational.builder.game_character

data class Skill(val name: String, val level: Int)

// Builder class for Skill
class SkillBuilder {
    private var name: String? = null
    private var level: Int = 1

    fun name(name: String) = apply { this.name = name }
    fun level(level: Int) = apply { this.level = level }

    fun build(): Skill {
        checkNotNull(name) { "Skill must have a name!" }
        return Skill(name!!, level)
    }
}