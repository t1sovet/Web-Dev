class Vehicle:
    total_vehicles: int = 0

    def __init__(self, make: str, model: str, year: int) -> None:
        self.make  = make
        self.model = model
        self.year  = year
        self._speed: float = 0.0  
        Vehicle.total_vehicles += 1

    @property
    def speed(self) -> float:
        return self._speed

    @speed.setter
    def speed(self, value: float) -> None:
        if value < 0:
            raise ValueError("Speed cannot be negative.")
        self._speed = value


    def age(self) -> int:
        return 2026 - self.year


    def __str__(self) -> str:
        return (
            f"[Vehicle] {self.year} {self.make} {self.model} | "
            f"Speed: {self.speed:.1f} km/h | Age: {self.age()} yr(s)"
        )

    def __repr__(self) -> str:
        return f"Vehicle(make={self.make!r}, model={self.model!r}, year={self.year})"

class Car(Vehicle):
    def __init__(
        self,
        make: str,
        model: str,
        year: int,
        num_doors: int = 4,
        fuel_type: str = "petrol",
        trunk_liters: float = 350.0,
    ) -> None:
        super().__init__(make, model, year)
        self.num_doors    = num_doors
        self.fuel_type    = fuel_type.lower()
        self.trunk_liters = trunk_liters

    def open_trunk(self) -> str:
        return f"Trunk opened — {self.trunk_liters:.0f} L of cargo space available."


    def __str__(self) -> str:
        return (
            f"[Car]     {self.year} {self.make} {self.model} | "
            f"{self.num_doors}-door {self.fuel_type} | "
            f"Speed: {self.speed:.1f} km/h | Trunk: {self.trunk_liters:.0f} L"
        )

class ElectricTruck(Vehicle):

    def __init__(
        self,
        make: str,
        model: str,
        year: int,
        payload_tons: float = 5.0,
        battery_kwh: float = 300.0,
        charge_pct: float = 100.0,
    ) -> None:
        super().__init__(make, model, year)
        self.payload_tons = payload_tons
        self.battery_kwh  = battery_kwh
        self._charge_pct  = min(100.0, max(0.0, charge_pct))

    @property
    def charge_pct(self) -> float:
        return self._charge_pct

    @charge_pct.setter
    def charge_pct(self, value: float) -> None:
        self._charge_pct = min(100.0, max(0.0, value))


    def charge(self, amount_pct: float) -> str:
        before = self._charge_pct
        self.charge_pct += amount_pct
        return (
            f"🔋 {self.make} {self.model} charged: "
            f"{before:.1f}% → {self._charge_pct:.1f}%"
        )

    def load_cargo(self, tons: float) -> str:
        if tons > self.payload_tons:
            return (
                f"⚠️  Load {tons} t exceeds max payload of {self.payload_tons} t!"
            )
        return f"✅ {tons} t loaded onto {self.make} {self.model} (max {self.payload_tons} t)."

    def __str__(self) -> str:
        return (
            f"[E-Truck] {self.year} {self.make} {self.model} | "
            f"Payload: {self.payload_tons} t | "
            f"Battery: {self._charge_pct:.1f}% ({self.battery_kwh} kWh) | "
            f"Speed: {self.speed:.1f} km/h"
        )
