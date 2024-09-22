export class TemperatureData {
  private readonly temperatureData: string;

  constructor(temperatureData: string) {
    this.temperatureData = temperatureData;
  }

  getTemperatureData(): string {
    return this.temperatureData;
  }
}
