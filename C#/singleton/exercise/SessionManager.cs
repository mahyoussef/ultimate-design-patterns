namespace Singleton.Exercise;

public sealed class SessionManager
{
    private static SessionManager instance;
    private readonly Dictionary<string, string> userSessions;

    private SessionManager()
    {
        this.userSessions = [];
    }

    public static SessionManager GetInstance()
    {
        if (instance is null)
        {
            lock (typeof(SessionManager))
            {
                instance ??= new SessionManager();
            }
        }

        return instance;
    }

    public string CreateSession(string userId)
    {
        string sessionId = GenerateSessionId();
        userSessions[sessionId] = userId;
        return sessionId;
    }

    public string GetUserId(string sessionId)
    {
        return userSessions.GetValueOrDefault(sessionId);
    }

    private string GenerateSessionId()
    {
        return $"SESSION_{DateTimeOffset.Now.ToUnixTimeMilliseconds()}";
    }
}
