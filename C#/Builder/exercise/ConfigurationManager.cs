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
            this.graphicsQuality = builder.GraphicsQuality;
            this.enableSound = builder.EnableSound;
            this.controlScheme = builder.ControlScheme;
            this.enableNotifications = builder.EnableNotifications;
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
                this.GraphicsQuality = graphicsQuality;
                return this;
            }

            public ConfigurationBuilder SetEnableSound(bool enableSound)
            {
                this.EnableSound = enableSound;
                return this;
            }

            public ConfigurationBuilder SetControlScheme(string controlScheme)
            {
                this.ControlScheme = controlScheme;
                return this;
            }

            public ConfigurationBuilder SetEnableNotifications(bool enableNotifications)
            {
                this.EnableNotifications = enableNotifications;
                return this;
            }

            public ConfigurationManager Build()
            {
                return new ConfigurationManager(this);
            }
        }
    }
}
