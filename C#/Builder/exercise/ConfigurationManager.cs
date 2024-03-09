namespace Builder.exercise
{
    public class ConfigurationManager
    {
        private int graphicsQuality;
        private bool enableSound;
        private string controlScheme;
        private bool enableNotifications;

        private ConfigurationManager(ConfigurationBuilder builder)
        {
            graphicsQuality = builder.GraphicsQuality;
            enableSound = builder.EnableSound;
            controlScheme = builder.ControlScheme;
            enableNotifications = builder.EnableNotifications;
        }

        public int GraphicsQuality => graphicsQuality;
        public bool EnableSound => enableSound;
        public string ControlScheme => controlScheme;
        public bool EnableNotifications => enableNotifications;

        public class ConfigurationBuilder
        {
            public int GraphicsQuality { get; private set; }
            public bool EnableSound { get; private set; }
            public string ControlScheme { get; private set; }
            public bool EnableNotifications { get; private set; }

            public ConfigurationBuilder()
            {
            }

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
            {
                return new ConfigurationManager(this);
            }
        }
    }
}
