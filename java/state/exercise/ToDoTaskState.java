package state.exercise;

public class ToDoTaskState implements TaskState {
    private final ProjectManagement projectManagement;

    public ToDoTaskState(ProjectManagement projectManagement) {
        this.projectManagement = projectManagement;
    }

    @Override
    public void pickUpTask(User assignedUser, Task task) {

    }

    @Override
    public void processTask(Task task) {

    }

    @Override
    public void blockTask(Task task, String reason) {

    }

    @Override
    public void reviewTask(Task task, User reviewer) {

    }

    @Override
    public void finishTask(Task task) {

    }
}
