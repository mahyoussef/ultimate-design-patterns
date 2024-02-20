package singleton.exercise;

import singleton.Logger;

import java.util.HashMap;
import java.util.Map;

public class SessionManager {
    private static SessionManager instance;
    private Map<String, String> userSessions;

    private SessionManager() {
        // Private constructor to prevent instantiation from outside
        // Initialize user sessions map
        this.userSessions = new HashMap<>();
    }

    public static SessionManager getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if(instance == null) {
                    instance = new SessionManager();
                }
            }
        }
        return instance;
    }

    public String createSession(String userId) {
        // Generate a session ID and associate it with the user
        String sessionId = generateSessionId();
        userSessions.put(sessionId, userId);
        return sessionId;
    }

    public String getUserId(String sessionId) {
        // Retrieve the user ID associated with the session
        return userSessions.get(sessionId);
    }

    private String generateSessionId() {
        // Simple session ID generation logic (for demonstration purposes)
        return "SESSION_" + System.currentTimeMillis();
    }
}

