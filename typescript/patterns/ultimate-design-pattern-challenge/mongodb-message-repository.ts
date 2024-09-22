class MongoDbMessageRepository implements MessageRepository {
  save(formattedMessage: string): void {
    console.log(`Saving data: ${formattedMessage} in mongo database...`);
  }
}
