namespace Mediator.Exercise;

public interface IAirTrafficControlMediator
{
    void RequestTakeOff(IAirplane airplane);
    void RequestLanding(IAirplane airplane);
    void Register(IAirplane airplane);
}
