<?php
class SessionManager
{
    private static ?SessionManager $instance = null;
    private array $options;

    private function __construct()
    {
        // Default session options
        $this->options = [
            'name' => 'PHPSESSID',
            'lifetime' => 3600,
            'path' => '/',
            'domain' => '',
            'secure' => false,
            'httponly' => true,
            'samesite' => 'Lax',
        ];
    }

    public static function getInstance(): SessionManager
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function startSession(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start($this->options);
        }
    }

    public function getSessionId(): string
    {
        return session_id();
    }

    public function setOption(string $key, $value): void
    {
        $this->options[$key] = $value;
    }

    public function getOption(string $key)
    {
        return $this->options[$key] ?? null;
    }

    public function store(string $key, $value): void
    {
        $_SESSION[$key] = $value;
    }

    public function retrieve(string $key)
    {
        return $_SESSION[$key] ?? null;
    }

    public function remove(string $key): void
    {
        unset($_SESSION[$key]);
    }

    public function destroySession(): void
    {
        session_destroy();
    }
}
