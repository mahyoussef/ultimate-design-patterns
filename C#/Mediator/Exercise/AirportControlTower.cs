using System.Runtime.InteropServices;

namespace Mediator.Exercise;

public sealed class AirportControlTower : IAirTrafficControlMediator
{
    private readonly List<IAirplane> _airplanes;

    public AirportControlTower()
        => _airplanes = [];

    public void Register(IAirplane airplane)
        => _airplanes.Add(airplane);

    public void RequestLanding(IAirplane airplane)
    {
        foreach (var otherAirplane in CollectionsMarshal.AsSpan(_airplanes))
        {
            otherAirplane.NotifyAirTrafficControl($"the following airplane: {airplane.Type} is taking off...");
        }

        airplane.NotifyAirTrafficControl("Requesting takeoff accepted...");
    }

    public void RequestTakeOff(IAirplane airplane)
    {
        foreach (var otherAirplane in CollectionsMarshal.AsSpan(_airplanes))
        {
            otherAirplane.NotifyAirTrafficControl($"the following airplane: {airplane.Type} is landing...");
        }

        airplane.NotifyAirTrafficControl("Requesting landing accepted...");
    }
}
