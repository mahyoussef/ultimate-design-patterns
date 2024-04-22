package creational.builder

import creational.builder.game_character.*

// Example usage
fun main() {
    exampleOneWithoutBuilderPattern()
    println("\n---------######################-------------------\n")
    exampleTwoUsingBuilderPattern()
}

private fun exampleOneWithoutBuilderPattern() {
    // Define races
    val humanRace = Race("Human", mapOf("strength" to 2, "charisma" to 1))
    val elfRace = Race("Elf", mapOf("agility" to 2, "intelligence" to 1))
    val dwarfRace = Race("Dwarf", mapOf("strength" to 2, "constitution" to 1))

    // Define character classes
    val warriorClass = CharacterClass("Warrior", listOf(Skill("Swordsmanship", 1), Skill("Shield Mastery", 1)))
    val mageClass = CharacterClass("Mage", listOf(Skill("Fireball", 1), Skill("Teleportation", 1)))
    val rogueClass = CharacterClass("Rogue", listOf(Skill("Stealth", 1), Skill("Lockpicking", 1)))

    // Define attributes for characters
    val aldricAttributes =
        Attributes(healthPoints = 100, strength = 10, intelligence = 8, wisdom = 8, charisma = 10, speed = 5, luck = 5)
    val elaraAttributes =
        Attributes(healthPoints = 80, strength = 8, intelligence = 12, wisdom = 10, charisma = 8, speed = 7, luck = 7)
    val borinAttributes =
        Attributes(healthPoints = 120, strength = 12, intelligence = 6, wisdom = 6, charisma = 8, speed = 4, luck = 6)

    // Create characters
    val aldric = Character(
        name = "Aldric",
        race = humanRace,
        characterClass = warriorClass,
        attributes = aldricAttributes,
        inventory = Inventory(mutableListOf(Item("Iron Sword", 5.0), Item("Steel Shield", 10.0))),
        skills = listOf(Skill("Swimming", 1))
    )

    val elara = Character(
        name = "Elara",
        race = elfRace,
        characterClass = mageClass,
        attributes = elaraAttributes,
        inventory = Inventory(mutableListOf(Item("Staff of Fire", 3.0))),
        skills = listOf(Skill("Arcane Knowledge", 1))
    )

    val borin = Character(
        name = "Borin",
        race = dwarfRace,
        characterClass = rogueClass,
        attributes = borinAttributes,
        inventory = Inventory(mutableListOf(Item("Dagger", 2.0), Item("Thieves' Toolkit", 3.0))),
        skills = listOf(Skill("Poison Making", 1))
    )

    // Print the created characters
    println(aldric)
    println(elara)
    println(borin)
}

private fun exampleTwoUsingBuilderPattern() {
    // Build races
    val humanRace = RaceBuilder()
        .name("Human")
        .addStatBonus("strength", 2)
        .addStatBonus("charisma", 1)
        .build()

    val elfRace = RaceBuilder()
        .name("Elf")
        .addStatBonus("agility", 2)
        .addStatBonus("intelligence", 1)
        .build()

    val dwarfRace = RaceBuilder()
        .name("Dwarf")
        .addStatBonus("strength", 2)
        .addStatBonus("constitution", 1)
        .build()

    // Build character classes
    val warriorClass = CharacterClassBuilder()
        .name("Warrior")
        .addStartingSkill(SkillBuilder().name("Swordsmanship").level(1).build())
        .addStartingSkill(SkillBuilder().name("Shield Mastery").level(1).build())
        .build()

    val mageClass = CharacterClassBuilder()
        .name("Mage")
        .addStartingSkill(SkillBuilder().name("Fireball").level(1).build())
        .addStartingSkill(SkillBuilder().name("Teleportation").level(1).build())
        .build()

    val rogueClass = CharacterClassBuilder()
        .name("Rogue")
        .addStartingSkill(SkillBuilder().name("Stealth").level(1).build())
        .addStartingSkill(SkillBuilder().name("Lockpicking").level(1).build())
        .build()

    // Build character attributes
    val aldricAttributes = AttributesBuilder()
        .healthPoints(100)
        .strength(10)
        .intelligence(8)
        .wisdom(8)
        .charisma(10)
        .speed(5)
        .luck(5)
        .build()

    val elaraAttributes = AttributesBuilder()
        .healthPoints(80)
        .strength(8)
        .intelligence(12)
        .wisdom(10)
        .charisma(8)
        .speed(7)
        .luck(7)
        .build()

    val borinAttributes = AttributesBuilder()
        .healthPoints(120)
        .strength(12)
        .intelligence(6)
        .wisdom(6)
        .charisma(8)
        .speed(4)
        .luck(6)
        .build()

    // Create characters
    val aldric = CharacterBuilder()
        .name("Aldric")
        .race(humanRace)
        .characterClass(warriorClass)
        .attributes(aldricAttributes)
        .addToInventory(Item("Iron Sword", 5.0))
        .addToInventory(Item("Steel Shield", 10.0))
        .addSkill(Skill("Swimming", 1))
        .build()

    val elara = CharacterBuilder()
        .name("Elara")
        .race(elfRace)
        .characterClass(mageClass)
        .attributes(elaraAttributes)
        .addToInventory(Item("Staff of Fire", 3.0))
        .addSkill(Skill("Arcane Knowledge", 1))
        .build()

    val borin = CharacterBuilder()
        .name("Borin")
        .race(dwarfRace)
        .characterClass(rogueClass)
        .attributes(borinAttributes)
        .addToInventory(Item("Dagger", 2.0))
        .addToInventory(Item("Thieves' Toolkit", 3.0))
        .addSkill(Skill("Poison Making", 1))
        .build()

    // Print the created characters
    println(aldric)
    println(elara)
    println(borin)
}


