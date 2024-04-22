package creational.builder.game_character

// Data classes for nested character properties
data class Race(val name: String, val statBonuses: Map<String, Int>)


// Builder class for Race
class RaceBuilder {
    private var name: String? = null
    private var statBonuses: MutableMap<String, Int> = mutableMapOf()

    fun name(name: String) = apply { this.name = name }
    fun addStatBonus(stat: String, bonus: Int) = apply { statBonuses[stat] = bonus }

    fun build(): Race {
        checkNotNull(name) { "Race must have a name!" }
        return Race(name!!, statBonuses)
    }
}