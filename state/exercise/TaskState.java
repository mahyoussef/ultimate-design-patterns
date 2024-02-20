package state.exercise;

public interface TaskState {

    void pickUpTask(User assignedUser, Task task);
    void processTask(Task task);
    void blockTask(Task task, String reason);
    void reviewTask(Task task, User reviewer);
    void finishTask(Task task);
}
