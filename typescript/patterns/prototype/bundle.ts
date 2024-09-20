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

// #############################

class Poster extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Poster(this.getColor(), this.getLayout(), this.getColor());
  }
}

class Brochure extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Brochure(this.getColor(), this.getLayout(), this.getColor());
  }
}

class Flyer extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Flyer(this.getContent(), this.getLayout(), this.getColor());
  }
}

// Example usage

const flyer = new Flyer("Flyer content", "A4", "white");
const flyerA3 = flyer.clone();
flyerA3.setColor("Red");

flyer.print();
flyerA3.print();
