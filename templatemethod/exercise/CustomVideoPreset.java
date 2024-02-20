package templatemethod.exercise;

public class CustomVideoPreset extends VideoPreset {
    @Override
    protected void applyColorCorrection() {
        System.out.println("Apply my favorite color correction...");
    }

    @Override
    protected void renderVideo() {
        System.out.println("render video for FHD...");
    }
}
