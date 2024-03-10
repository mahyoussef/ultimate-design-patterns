namespace Builder.Exercise;

public class ConfigurationManager
{
    private ConfigurationManager(ConfigurationBuilder builder)
    {
        GraphicsQuality = builder.GraphicsQuality;
        EnableSound = builder.EnableSound;
        ControlScheme = builder.ControlScheme;
        EnableNotifications = builder.EnableNotifications;
    }

    public int GraphicsQuality { get; }
    public bool EnableSound { get; }
    public string? ControlScheme { get; }
    public bool EnableNotifications { get; }

    public sealed class ConfigurationBuilder
    {
        public int GraphicsQuality { get; private set; }
        public bool EnableSound { get; private set; }
        public string? ControlScheme { get; private set; }
        public bool EnableNotifications { get; private set; }

        public ConfigurationBuilder SetGraphicsQuality(int graphicsQuality)
        {
            GraphicsQuality = graphicsQuality;
            return this;
        }

        public ConfigurationBuilder SetEnableSound(bool enableSound)
        {
            EnableSound = enableSound;
            return this;
        }

        public ConfigurationBuilder SetControlScheme(string controlScheme)
        {
            ControlScheme = controlScheme;
            return this;
        }

        public ConfigurationBuilder SetEnableNotifications(bool enableNotifications)
        {
            EnableNotifications = enableNotifications;
            return this;
        }

        public ConfigurationManager Build()
            => new(this);
    }
}
