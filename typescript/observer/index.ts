import { Customer } from "./Customer";
import { Offer } from "./offer";
import { OnlineMarketplace } from "./online-marketplace";
import { Product } from "./product";
import { ShippingCompany } from "./shipping-company";

const onlineMarketplace = new OnlineMarketplace();
const ahmed = new Customer("Ahmed");
const mahmoud = new Customer("Mahmoud");
const youssef = new Customer("Youssef");
const mostafa = new Customer("Mostafa");
const shippingCompany = new ShippingCompany("DHL");

onlineMarketplace.subscribe("NEW_PRODUCT", ahmed);
onlineMarketplace.subscribe("NEW_OFFER", ahmed);

onlineMarketplace.subscribe("NEW_OFFER", mahmoud);

onlineMarketplace.subscribe("NEW_PRODUCT", youssef);

onlineMarketplace.subscribe("JOB_OPENING", mostafa);

onlineMarketplace.subscribe("NEW_PRODUCT", shippingCompany);

onlineMarketplace.addNewProduct(new Product("Mobile", 1000));
onlineMarketplace.addNewOffer(
  new Offer("New offer with 20% discount for every item")
);
onlineMarketplace.addNewJobOpening("SalesMan");
