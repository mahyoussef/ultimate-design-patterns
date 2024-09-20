class Brochure extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Brochure(this.getColor(), this.getLayout(), this.getColor());
  }
}
