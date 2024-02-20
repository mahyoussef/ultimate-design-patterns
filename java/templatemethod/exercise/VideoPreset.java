package templatemethod.exercise;

public abstract class VideoPreset {

    public void applyPreset() {
        enhanceVideoQuality();
        applyColorCorrection();
        enhanceAudioQuality();
        applyFilters();
        renderVideo();
    }

    private void applyFilters() {
    }

    abstract protected void applyColorCorrection();

    private void enhanceVideoQuality() {

    }

    private void enhanceAudioQuality() {

    }

    abstract protected void renderVideo();
}
