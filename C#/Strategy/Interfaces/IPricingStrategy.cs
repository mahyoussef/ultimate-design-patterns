namespace dotnet.Strategy.Interfaces;

public interface IPricingStrategy
{ 
    decimal CalculatePrice(decimal price);
}