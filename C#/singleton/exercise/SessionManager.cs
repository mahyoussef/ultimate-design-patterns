namespace Singleton.Exercise;

public sealed class SessionManager
{
    private static SessionManager? s_instance;
    private readonly Dictionary<string, string> _userSessions;

    private SessionManager()
    {
        _userSessions = [];
    }

    public static SessionManager GetInstance()
    {
        if (s_instance is null)
        {
            lock (typeof(SessionManager))
            {
                s_instance ??= new SessionManager();
            }
        }

        return s_instance;
    }

    public string CreateSession(string userId)
    {
        string sessionId = GenerateSessionId();
        _userSessions[sessionId] = userId;
        return sessionId;
    }

    public string? GetUserId(string sessionId)
    {
        return _userSessions.GetValueOrDefault(sessionId);
    }

    private string GenerateSessionId()
    {
        return $"SESSION_{DateTimeOffset.Now.ToUnixTimeMilliseconds()}";
    }
}
