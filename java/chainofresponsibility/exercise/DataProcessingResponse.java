package chainofresponsibility.exercise;

public class DataProcessingResponse {

    private String result;
    private boolean isSucceeded;

    public DataProcessingResponse(String result, boolean isSucceeded) {
        this.result = result;
        this.isSucceeded = isSucceeded;
    }

    public String getResult() {
        return result;
    }

    public boolean isSucceeded() {
        return isSucceeded;
    }
}
