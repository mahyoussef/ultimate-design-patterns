package visitor.exercise;

public class CountingWords implements FeatureVisitor {
    @Override
    public void visit(Document document) {
        System.out.println("Calculating count of words in document: " + document.getName());
    }
}
