import { Order } from "./Order";
import { ShippingCostCalculator } from "./ShippingCostCalculator";

export class PickupOrder extends Order implements ShippingCostCalculator {
    
    calculateShippingCost(): number {
        return this.price + this.SHIPPING_COST;
    }

}