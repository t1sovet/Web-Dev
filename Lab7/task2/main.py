"""
main.py — Vehicle Fleet Demo

Demonstrates:
  • Object instantiation from each class
  • Storing objects in a list and iterating
  • Calling methods and printing results
  • Polymorphism via overridden fuel_info() and __str__
"""

from models import Vehicle, Car, ElectricTruck


# ── Helper ─────────────────────────────────────────────────────────────────

def section(title: str) -> None:
    """Print a formatted section header."""
    width = 60
    print(f"\n{'═' * width}")
    print(f"  {title}")
    print(f"{'═' * width}")


# ── 1. Instantiate objects ──────────────────────────────────────────────────

section("1. Creating Fleet Objects")

base_vehicle = Vehicle("Generic", "Transport", 2020)

sedan = Car(
    make="Toyota",
    model="Camry",
    year=2022,
    num_doors=4,
    fuel_type="hybrid",
    trunk_liters=428,
)

sports_car = Car(
    make="Mazda",
    model="MX-5",
    year=2023,
    num_doors=2,
    fuel_type="petrol",
    trunk_liters=130,
)

truck1 = ElectricTruck(
    make="Tesla",
    model="Semi",
    year=2024,
    payload_tons=18.0,
    battery_kwh=500,
    charge_pct=85,
)

truck2 = ElectricTruck(
    make="Rivian",
    model="R1T",
    year=2023,
    payload_tons=1.5,
    battery_kwh=135,
    charge_pct=42,
)

print(f"✅ {Vehicle.total_vehicles} vehicles created.")


# ── 2. Store in a list & iterate ────────────────────────────────────────────

section("2. Fleet Roster  (polymorphic __str__)")

fleet: list[Vehicle] = [base_vehicle, sedan, sports_car, truck1, truck2]

for vehicle in fleet:
    print(vehicle)          # calls each class's own __str__


# ── 3. Call instance methods ────────────────────────────────────────────────

section("3. Vehicle Actions")

print("\n--- Accelerating ---")
print(sedan.accelerate(60))
print(sports_car.accelerate(120))
print(truck1.accelerate(80))

print("\n--- Braking ---")
print(sports_car.brake(40))
print(truck1.brake(30))

print("\n--- Car-specific: Open trunk ---")
print(sedan.open_trunk())
print(sports_car.open_trunk())

print("\n--- Truck-specific: Charge & Load ---")
print(truck2.charge(30))
print(truck1.load_cargo(15))
print(truck1.load_cargo(25))     # exceeds max payload


# ── 4. Polymorphism: fuel_info() ────────────────────────────────────────────

section("4. Polymorphism — fuel_info() on every vehicle")

for vehicle in fleet:
    label = f"{vehicle.make} {vehicle.model}"
    print(f"  {label:<25} → {vehicle.fuel_info()}")


# ── 5. Post-action fleet status ─────────────────────────────────────────────

section("5. Fleet Status After Actions")

for vehicle in fleet:
    print(vehicle)


# ── 6. Class-level data ─────────────────────────────────────────────────────

section("6. Fleet Summary")

cars   = [v for v in fleet if isinstance(v, Car)]
trucks = [v for v in fleet if isinstance(v, ElectricTruck)]

print(f"  Total vehicles  : {Vehicle.total_vehicles}")
print(f"  Passenger cars  : {len(cars)}")
print(f"  Electric trucks : {len(trucks)}")
print(f"  Oldest vehicle  : {max(fleet, key=lambda v: v.age()).age()} year(s) old")
print(f"  Fastest right now: {max(fleet, key=lambda v: v.speed).make} "
      f"{max(fleet, key=lambda v: v.speed).model} "
      f"@ {max(fleet, key=lambda v: v.speed).speed:.1f} km/h")
