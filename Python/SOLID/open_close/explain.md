## Abstraction (OOP)

***

### What is an Abstract Base Class?

Think of an **Abstract Base Class (ABC)** as a blueprint for other classes. It defines a set of methods and properties
that any subclass must implement. The abstract base class itself can’t be instantiated, which means you can’t create
objects directly from it.

### Why Use Abstract Base Classes?

1. **Enforce a Contract**: ABCs make sure that all subclasses follow a certain contract by implementing required methods
   or properties.
2. **Prevent Mistakes**: They prevent you from creating objects of a class that hasn’t implemented all required methods.
3. **Organize Code**: They help organize code and define a clear structure for related classes.

### How to Define an Abstract Base Class

1. **Import the ABC Module**: You need to import `ABC` and `abstractmethod` from the `abc` module.
2. **Create a Class that Inherits from `ABC`**: Your abstract base class should inherit from `ABC`.
3. **Define Abstract Methods**: Use the `@abstractmethod` decorator to mark methods that must be implemented in any
   subclass.

Here’s a simple example:

```python
from abc import ABC, abstractmethod


class Animal(ABC):

    @abstractmethod
    def make_sound(self):
        """Method that must be implemented by subclasses."""
        pass

```

In this example:

- `Animal` is an abstract base class.
- `make_sound` is an abstract method that any subclass of `Animal` must implement.

### Creating Subclasses

To create a subclass of an abstract base class, you must implement all abstract methods defined in the base class:

```python
class Dog(Animal):

    def make_sound(self):
        return "Woof!"


class Cat(Animal):

    def make_sound(self):
        return "Meow!"

```

Here:

- `Dog` and `Cat` are concrete classes that inherit from `Animal`.
- They each implement the `make_sound` method as required by the abstract base class.

### What Happens if You Don’t Implement the Required Methods?

If you try to create an instance of a subclass that doesn’t implement all abstract methods, you’ll get a `TypeError`.

Example:

```python
class Fish(Animal):
    pass


# This will raise an error because `Fish` does not implement `make_sound`.
f = Fish()

```