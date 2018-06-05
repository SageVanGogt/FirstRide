export const geocodeCleaner = (data) => {
  const results = data.results[0];
  const location = results.geometry.location;
  return location;
}

export const seatsRemainingUpdate = (rides, passengers) => {
  const updatedRides = rides.map(ride => {
    const ridesPassengers = passengers.filter(rider => rider.ride_id === ride.id);
    const totalPassengers = ridesPassengers.length;
    ride.seats_remaining = parseInt(ride.seats_remaining) - totalPassengers;
    return ride;
  })
  
  return updatedRides;
}

export const latLngToAddress = (data) => {
  let address = data.results[0].formatted_address;
  return address;
}