export class Order {
    protected name:string;
    protected price: number;
    protected SHIPPING_COST: number = 10;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }
    
}