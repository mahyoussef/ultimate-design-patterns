namespace Mediator.Exercise;

public sealed class CommercialAirplane : IAirplane
{
    public string Type { get; } = "Commercial";

    private readonly IAirTrafficControlMediator _airTrafficControlMediator;

    public CommercialAirplane(IAirTrafficControlMediator airTrafficControl)
        => _airTrafficControlMediator = airTrafficControl;

    public void NotifyAirTrafficControl(string message)
        => Console.WriteLine($"Commercial Airplane: {message}");

    public void RequestLanding()
        => _airTrafficControlMediator.RequestLanding(this);

    public void RequestTakeoff()
        => _airTrafficControlMediator.RequestTakeOff(this);
}
