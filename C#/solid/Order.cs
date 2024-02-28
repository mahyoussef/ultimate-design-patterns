namespace Solid
{
    public class Order
    {
        protected string Name { get; set; }
        protected double Price { get; set; }

        public string GetName()
        {
            return Name;
        }

        public double GetPrice()
        {
            return Price;
        }
    }
}
