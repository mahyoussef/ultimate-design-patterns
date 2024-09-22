abstract class AbstractMessageFormatter implements MessageFormatter {
  formatMessage(messageToFormat: string): string {
    this.validateMessage(messageToFormat);
    this.checkMessageSize(messageToFormat);
    return this.format(messageToFormat);
  }

  private validateMessage(messageToValidate: string): void {
    console.log("Validating message...");
  }

  private checkMessageSize(messageToCheck: string): void {
    console.log("Checking message size...");
  }

  protected abstract format(messageToFormat: string): string;

  abstract getType(): string;
}
