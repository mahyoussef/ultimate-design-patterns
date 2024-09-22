class Logger {
  private logLevel: LogLevel = LogLevel.INFO;
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }

  setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  logDebug(message: string) {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.log(message);
    }
  }
  logInfo(message: string) {
    if (this.logLevel <= LogLevel.INFO) {
      console.log(message);
    }
  }
  logError(message: string) {
    if (this.logLevel <= LogLevel.ERROR) {
      console.log(message);
    }
  }
  logWarn(message: string) {
    if (this.logLevel <= LogLevel.WARN) {
      console.log(message);
    }
  }
}
