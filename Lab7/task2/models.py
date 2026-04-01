class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def speak(self):
        return "..."

    def describe(self):
        return f"{self.name} is {self.age} year(s) old and weighs {self.weight}kg."

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, weight={self.weight}kg)"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item} and brings it back!"

    def __str__(self):
        return f"Dog(name={self.name}, breed={self.breed}, age={self.age}, weight={self.weight}kg)"


class Cat(Animal):
    def __init__(self, name, age, weight, indoor):
        super().__init__(name, age, weight)
        self.indoor = indoor

    def speak(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} purrs contentedly..."

    def __str__(self):
        living = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, type={living}, age={self.age}, weight={self.weight}kg)"


class Bird(Animal):
    def __init__(self, name, age, weight, can_fly):
        super().__init__(name, age, weight)
        self.can_fly = can_fly

    def speak(self):
        return "Tweet!"

    def fly(self):
        if self.can_fly:
            return f"{self.name} soars gracefully through the sky!"
        return f"{self.name} cannot fly but runs very fast!"

    def __str__(self):
        ability = "flying" if self.can_fly else "flightless"
        return f"Bird(name={self.name}, type={ability}, age={self.age}, weight={self.weight}kg)"
