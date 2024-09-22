class Flyer extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Flyer(this.getContent(), this.getLayout(), this.getColor());
  }
}
