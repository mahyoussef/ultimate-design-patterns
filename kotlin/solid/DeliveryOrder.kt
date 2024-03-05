package solid

class DeliveryOrder(name: String, price: Double): Order(name, price),ShippingOrderCalculator {
     override fun getTotalPrice():Double{
        return price+ SHIPPING_ORDER
    }
}