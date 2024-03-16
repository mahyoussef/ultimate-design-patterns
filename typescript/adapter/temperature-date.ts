export class TemperatureDate {
  private readonly temperatureDate: string;

  constructor(temperatureDate: string) {
    this.temperatureDate = temperatureDate;
  }

  getTemperatureDate(): string {
    return this.temperatureDate;
  }
}
