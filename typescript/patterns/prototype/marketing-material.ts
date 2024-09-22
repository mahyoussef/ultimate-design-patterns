abstract class MarketingMaterial {
  protected content: string;
  private layout: string;
  private color: string;

  constructor(content: string, layout: string, color: string) {
    this.content = content;
    this.layout = layout;
    this.color = color;
  }

  abstract clone(): MarketingMaterial;

  print(): void {
    console.log(`Content: ${this.content}`);
    console.log(`Layout: ${this.layout}`);
    console.log(`Color: ${this.color}`);
  }

  getContent(): string {
    return this.content;
  }
  setContent(content: string): void {
    this.content = content;
  }

  getLayout(): string {
    return this.layout;
  }
  setLayout(layout: string): void {
    this.layout = layout;
  }

  getColor(): string {
    return this.color;
  }
  setColor(color: string): void {
    this.color = color;
  }
}
