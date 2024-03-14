namespace Mediator.Exercise;

public interface IAirplane
{
    string Type { get; }
    void RequestTakeoff();
    void RequestLanding();
    void NotifyAirTrafficControl(string message);
}
