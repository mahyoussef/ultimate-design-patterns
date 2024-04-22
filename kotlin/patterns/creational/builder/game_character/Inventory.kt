package creational.builder.game_character

data class Inventory(private val items: MutableList<Item> = mutableListOf()) {
    fun addItem(item: Item) = items.add(item)
    fun getItems(): List<Item> = items.toList()
}