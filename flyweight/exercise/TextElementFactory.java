package flyweight.exercise;

import java.util.HashMap;
import java.util.Map;

public class TextElementFactory {
    private Map<String, TextElement> textElementCache;

    public TextElementFactory() {
        textElementCache = new HashMap<>();
    }

    public TextElement getTextElement(char character, Font font, Color color) {
        String key = character + "_" + font.toString() + "_" + color.toString();
        if (!textElementCache.containsKey(key)) {
            textElementCache.put(key, new Character(character, font, color));
        }
        return textElementCache.get(key);
    }
}
