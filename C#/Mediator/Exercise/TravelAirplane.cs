namespace Mediator.Exercise;

public sealed class TravelAirplane : IAirplane
{
    public string Type { get; } = "Travel";

    private readonly IAirTrafficControlMediator _airTrafficControlMediator;

    public TravelAirplane(IAirTrafficControlMediator airTrafficControl)
        => _airTrafficControlMediator = airTrafficControl;

    public void NotifyAirTrafficControl(string message)
        => Console.WriteLine($"Travel Airplane: {message}");

    public void RequestLanding()
        => _airTrafficControlMediator.RequestLanding(this);

    public void RequestTakeoff()
        => _airTrafficControlMediator.RequestTakeOff(this);
}
