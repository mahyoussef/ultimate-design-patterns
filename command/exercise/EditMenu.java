package command.exercise;

import java.util.HashMap;
import java.util.Map;

public class EditMenu {

    private Map<String, TextOperationCommand> menuItems;

    public EditMenu() {
        this.menuItems = new HashMap<>();
    }

    public void choose(String menuItem) {
        menuItems.get(menuItem).execute();
    }

    public void setEditMenuItems(String menuItem, TextOperationCommand textOperationCommand) {
        menuItems.put(menuItem, textOperationCommand);
    }
}
