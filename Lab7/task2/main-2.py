from models import Animal, Dog, Cat, Bird


def print_section(title):
    print(f"\n{'=' * 50}")
    print(f"  {title}")
    print('=' * 50)


def main():
    print_section("Creating Animal Objects")

    dog = Dog(name="Rex", age=3, weight=28.5, breed="German Shepherd")
    cat = Cat(name="Whiskers", age=5, weight=4.2, indoor=True)
    bird_fly = Bird(name="Sky", age=2, weight=0.5, can_fly=True)
    bird_no_fly = Bird(name="Pingu", age=4, weight=30.0, can_fly=False)

    print(dog)
    print(cat)
    print(bird_fly)
    print(bird_no_fly)

    print_section("Storing Objects in a List")

    animals = [dog, cat, bird_fly, bird_no_fly]

    for animal in animals:
        print(f"  -> {animal.name} ({type(animal).__name__})")

    print_section("Calling describe() on All Animals")

    for animal in animals:
        print(f"  {animal.describe()}")

    print_section("Polymorphism: speak() on All Animals")

    for animal in animals:
        print(f"  {animal.name} says: {animal.speak()}")

    print_section("Calling Unique Child-Class Methods")

    print(f"  Dog  -> {dog.fetch('ball')}")
    print(f"  Cat  -> {cat.purr()}")
    print(f"  Bird -> {bird_fly.fly()}")
    print(f"  Bird -> {bird_no_fly.fly()}")


if __name__ == "__main__":
    main()
