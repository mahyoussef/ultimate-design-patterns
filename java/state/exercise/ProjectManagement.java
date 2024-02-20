package state.exercise;

public class ProjectManagement {
    private TaskState taskState;
    public ProjectManagement() {
    }

    public void changeState(TaskState changedTaskState) {
        taskState = changedTaskState;
    }

    void createTask(Task task) {
        taskState = new BacklogTaskState(this);
    }
    void pickUpTask(User assignedUser, Task task) {
        taskState.pickUpTask(assignedUser ,task);
    }
    void processTask(Task task) {
        taskState.processTask(task);
    }
    void blockTask(Task task, String reason) {
        taskState.blockTask(task, reason);
    }
    void reviewTask(Task task, User reviewer) {
        taskState.reviewTask(task, reviewer);
    }
    void finishTask(Task task) {
        taskState.finishTask(task);
    }
}
