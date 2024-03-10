using Observer;
using Observer.Enum;
using Observer.Models;

OnlineMarketPlace marketPlace = new();

Customer customer1 = new() { Name = "Ahmed" };
Customer customer2 = new() { Name = "Mahmoud" };

JobHunter jobHunter1 = new() { Name = "Microsoft" };
JobHunter jobHunter2 = new() { Name = "Google" };

Offer offer1 = new() { Message = "Buy 1 get 1 free" };
Offer offer2 = new() { Message = "Buy 2 get 2 free" };

marketPlace.Subscribe(EventType.JobOpening, customer1);
marketPlace.Subscribe(EventType.NewProduct, customer1);

marketPlace.Subscribe(EventType.JobOpening, customer2);
marketPlace.Subscribe(EventType.NewOffer, customer2);

Job softwareDeveloperJob = new() { Title = "Software Developer", Salary = 100000 };
marketPlace.AddNewJob(softwareDeveloperJob); // Both Customers will be notified
jobHunter1.Notify("I am looking for a job as a software developer.");

Product laptopProduct = new() { Name = "Laptop", Price = 1000 };
marketPlace.AddNewProduct(laptopProduct); // Customer 1 will be notified only.

marketPlace.AddNewOffer(offer1); // Customer 2 will be notified only.
marketPlace.AddNewOffer(offer2); // Customer 2 will be notified only.

customer1.Notify("I am looking for a job.");
customer2.Notify("I am looking for a job too.");

marketPlace.RemoveSubscriber(EventType.JobOpening, customer1);

Job engineeringManagerJob = new() { Title = "Engineering Manager", Salary = 200000 };
marketPlace.AddNewJob(engineeringManagerJob); // Only Customer 2 will be notified, as Customer 1 has unsubscribed.
