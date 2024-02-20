package ultimate;

public class MongoDbMessageRepository implements MessageRepository {
    @Override
    public void save(String formattedMessage) {
        System.out.println("Saving data: " + formattedMessage + " in mongo database...");
    }
}
