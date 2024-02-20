package uml;

public class Student implements LoggingStudentActivity {

    private int studentId;
    private String name;
    private int age;
    private Address address;

    public Student(int studentId, String name, int age) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }

    public void displayStudentInfo() {
        System.out.println("StudentId: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public int getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    private void log(String message) {
        Logger logger = new Logger();
        logger.log(message);
    }

    @Override
    public void logStudentActivity(String message) {
        log(message);
    }
}
