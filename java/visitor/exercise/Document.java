package visitor.exercise;

public class Document {

    private String name;

    public Document(String name) {
        this.name = name;
    }

    public void accept(FeatureVisitor featureVisitor) {
        featureVisitor.visit(this);
    }

    public String getName() {
        return name;
    }
}
