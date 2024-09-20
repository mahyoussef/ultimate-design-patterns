interface OrderState {
  processOrder(): void;
  shipOrder(): void;
  deliverOrder(): void;
  cancelOrder(): void;
}
