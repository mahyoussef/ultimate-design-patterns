package creational.builder.game_character

data class Attributes(
    val healthPoints: Int,
    val strength: Int,
    val intelligence: Int,
    val wisdom: Int,
    val charisma: Int,
    var speed: Int,
    var luck: Int,
)

// Builder class for Attributes
class AttributesBuilder {
    private var healthPoints: Int = 100
    private var strength: Int = 10
    private var intelligence: Int = 10
    private var wisdom: Int = 10
    private var charisma: Int = 10
    private var speed: Int = 10
    private var luck: Int = 10

    fun healthPoints(healthPoints: Int) = apply { this.healthPoints = healthPoints }
    fun strength(strength: Int) = apply { this.strength = strength }
    fun intelligence(intelligence: Int) = apply { this.intelligence = intelligence }
    fun wisdom(wisdom: Int) = apply { this.wisdom = wisdom }
    fun charisma(charisma: Int) = apply { this.charisma = charisma }
    fun speed(speed: Int) = apply { this.speed = speed }
    fun luck(luck: Int) = apply { this.luck = luck }

    fun build(): Attributes {
        return Attributes(healthPoints, strength, intelligence, wisdom, charisma, speed, luck)
    }
}