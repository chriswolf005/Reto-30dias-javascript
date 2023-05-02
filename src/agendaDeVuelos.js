 class Flight {
    constructor(origin, destination, date, capacity, price) {
      // Tu código aquí 👈
      this.origin=origin;
      this.destination=destination;
      this.date=date;
      this.capacity=capacity;
      this.price=price;
      this.passengers = [];
    }
    sellTicket(passenger) {
        if (this.capacity > 0) {
          this.passengers.push(passenger);
          this.capacity--;
          passenger.addFlight(this);
          return {
            reservation: {
              flight: this,
              passenger: passenger
            },
            message: "Ticket sold successfully"
          };
        } else {
          return {
            reservation: null,
            message: "Sorry, this flight is full"
          };
        }
      }
    }

  class Passenger {
    // Tu código aquí 👈
    constructor(name, lastName, age) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.flights = [];
    }
  
    addFlight(flight) {
      const { origin, destination, date, price } = flight;
      this.flights.push({
        origin,
        destination,
        date,
        price,
      });
    }
    
  }

  class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
      super(origin, destination, date, capacity, price);
      this.specialService = specialService;
    }
  
    // Override to apply logic
    addFlightToPassenger(passenger) {
      this.price += this.specialService;
      passenger.addFlight(this);
    }
  }

  class Reservation {
    constructor(flight, passenger) {
      this.flight = flight;
      this.passenger = passenger;
    }
  
    reservationDetails() {
      const { origin, destination, date } = this.flight;
      const { name, lastName } = this.passenger;
      return {
        origin,
        destination,
        date,
        reservedBy: `${name} ${lastName}`,
      };
    }
  }

  class EconomicFlight extends Flight {
    sellTicket(passenger) {
      // Tu código aquí 👇
      if (passenger.age < 18 || passenger.age > 65) {
        this.price *= 0.8;
      }
      passenger.addFlight(this);
    }
  }