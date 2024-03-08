namespace Strategy.Interfaces;

public interface IPricingStrategy
{
    /// <summary>
    /// Price calculation based on Subscription
    /// </summary>
    /// <param name="amount">Price to be calculated based on Subscription</param>
    decimal CalculatePrice(decimal price);
}