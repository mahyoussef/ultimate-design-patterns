package builder.exercise;

public class ConfigurationManager {
    private int graphicsQuality;
    private boolean enableSound;
    private String controlScheme;
    private boolean enableNotifications;
    // ... other properties

    private ConfigurationManager(ConfigurationBuilder builder) {
        this.graphicsQuality = builder.graphicsQuality;
        this.enableSound = builder.enableSound;
        this.controlScheme = builder.controlScheme;
        this.enableNotifications = builder.enableNotifications;
        // ... set other properties
    }

    // ... getters

    // Nested Builder class
    public static class ConfigurationBuilder {
        private int graphicsQuality;
        private boolean enableSound;
        private String controlScheme;
        private boolean enableNotifications;
        // ... other properties

        public ConfigurationBuilder() {
            // Set default values or leave them uninitialized
        }

        public ConfigurationBuilder setGraphicsQuality(int graphicsQuality) {
            this.graphicsQuality = graphicsQuality;
            return this;
        }

        public ConfigurationBuilder setEnableSound(boolean enableSound) {
            this.enableSound = enableSound;
            return this;
        }

        public ConfigurationBuilder setControlScheme(String controlScheme) {
            this.controlScheme = controlScheme;
            return this;
        }

        public ConfigurationBuilder setEnableNotifications(boolean enableNotifications) {
            this.enableNotifications = enableNotifications;
            return this;
        }

        // ... methods for other properties

        public ConfigurationManager build() {
            return new ConfigurationManager(this);
        }
    }
}


