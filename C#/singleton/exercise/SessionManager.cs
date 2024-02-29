using System;
using System.Collections.Generic;

namespace Singleton.Exercise
{
    public class SessionManager
    {
        private static SessionManager instance;
        private Dictionary<string, string> userSessions;

        private SessionManager()
        {
            this.userSessions = new Dictionary<string, string>();
        }

        public static SessionManager GetInstance()
        {
            if (instance == null)
            {
                lock (typeof(SessionManager))
                {
                    if (instance == null)
                    {
                        instance = new SessionManager();
                    }
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
            return "SESSION_" + DateTimeOffset.Now.ToUnixTimeMilliseconds();
        }
    }
}
