class Poster extends MarketingMaterial {
  constructor(content: string, layout: string, color: string) {
    super(content, layout, color);
  }

  clone(): MarketingMaterial {
    return new Poster(this.getColor(), this.getLayout(), this.getColor());
  }
}
