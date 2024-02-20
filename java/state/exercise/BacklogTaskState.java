package state.exercise;

public class BacklogTaskState implements TaskState {

    private final ProjectManagement projectManagement;

    public BacklogTaskState(ProjectManagement projectManagement) {
        this.projectManagement = projectManagement;
    }

    @Override
    public void pickUpTask(User assignedUser, Task task) {
        System.out.println("task: " + task.getName() + " is being assigned to user: " + assignedUser.getEmail());
        projectManagement.changeState(new ToDoTaskState(projectManagement));
    }

    @Override
    public void processTask(Task task) {
        System.out.println("task: " + task.getName() + " cannot be processed until it's assigned to someone");
    }

    @Override
    public void blockTask(Task task, String reason) {
        System.out.println("task: " + task.getName() + " cannot be blocked because it's still in the backlog");
    }

    @Override
    public void reviewTask(Task task, User reviewer) {
        System.out.println("task: " + task.getName() + " cannot be reviewed because it's still in the backlog");
    }

    @Override
    public void finishTask(Task task) {
        System.out.println("task: " + task.getName() + " cannot be finished because it's still in the backlog");
    }
}
