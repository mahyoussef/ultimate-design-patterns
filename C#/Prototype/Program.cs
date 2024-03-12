using Prototype;

Poster originalPoster = new("A4", "New Product", "Red");

// Create a clone of the original poster
Poster shallowCopyPoster = (Poster)originalPoster.CloneMarketingMaterial();
Poster deepCopyPoster = (Poster)originalPoster.Clone();

Console.WriteLine("Original Poster:");
originalPoster.Print(); 

originalPoster.Content = "Cloned Product";
originalPoster.Color = "Blue";

Console.WriteLine("Cloned Poster:");
deepCopyPoster.Print();
Console.WriteLine("Memberwise Cloned Poster:");
shallowCopyPoster.Print();
