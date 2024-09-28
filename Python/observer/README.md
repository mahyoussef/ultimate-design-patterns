### Some notes regarding the differences in code between Java and Python

## Method Overloading
- Unlike Java, In Python, you can't have the same function name with different parameters
- Because Python does not support method overloading by default. The reason for this is that Python functions are dynamically typed, and only the most recently defined function with the same name will be retained.
- But there's ways where you can achieve this in python
![carbon](https://github.com/user-attachments/assets/582f123a-b352-4ae1-a149-5fbf82a5bd35)



## Duck Typing
- Unlike Java, method parameters in Python do not have to be explicitly typed with their class, like ```product: Product```
- The variable product is expected to have a method get_name(). As long as the object passed into the function has a get_name() method, Python will execute it, regardless of whether the object’s type is explicitly defined or annotated.
![carbon (1)](https://github.com/user-attachments/assets/c1eb37b2-d993-4143-8e3d-d0793a3b0f75)
![carbon (2)](https://github.com/user-attachments/assets/6ace8548-df7a-4d98-b3a2-2cb389e24b45)



## Type Hinting
In Python, type hinting is used to indicate the expected types of variables. It helps with code readability and can assist in debugging. Here’s what each part means:
![carbon (3)](https://github.com/user-attachments/assets/8a946a8e-e58f-46b8-ae6b-1d5eb74d3582)

```self.subscribers: Dict[EventType, List[Subscriber]]:```
- This indicates that ```self.subscribers``` is a dictionary.
- The keys of this dictionary are of type EventType (which is an enum representing different events).
- The values are lists containing objects that implement the Subscriber interface.
- So, it means you’ll have a mapping from event types to lists of subscribers interested in those events.

```self.products: List[Product]:```
This indicates that ```self.products``` is a list containing Product objects.
This list will store all the products added to the marketplace.

```self.offers: List[Offer]:```
Similar to self.products, this indicates that self.offers is a list containing Offer objects.
This list will store all the offers added to the marketplace.