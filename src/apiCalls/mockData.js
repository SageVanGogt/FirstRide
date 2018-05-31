export const mockUser = {
  id:1,
  user_id:"456",
  user_img:"http://us.cdn281.fansshare.com/photos/channingtatum/bfhgoi-ccaagvrc-large-fat-44506770.jpg",
  bio:"I like to eat",
  rating:"Solid 7"
}

export const mockRides = {
  rides: [{
    id: 1,
    location_id: 1,
    driver_id: 1,
    car_capacity: '5',
    seats_remaining: '2',
    car_type: 'prius',
    date: '6/1/2018',
    time: '4:00pm'
  },
  {
    id: 2,
    location_id: 1,
    driver_id: 2,
    car_capacity: '5',
    seats_remaining: '2',
    car_type: 'prius',
    date: "6/1/2018",
    time: '4:00pm'
  },
  {
    id: 3,
    location_id: 1,
    driver_id: 3,
    car_capacity: '2',
    seats_remaining: '1',
    car_type: 'tesla roadster',
    date: "6/1/2018",
    time: '4:30pm'
  }
]}

export const mockUpdatedRides = {
  rides: [{
    id: 1,
    location_id: 1,
    driver_id: 1,
    car_capacity: '5',
    seats_remaining: 2,
    car_type: 'prius',
    date: '6/1/2018',
    time: '4:00pm'
  },
  {
    id: 2,
    location_id: 1,
    driver_id: 2,
    car_capacity: '5',
    seats_remaining: 1,
    car_type: 'prius',
    date: "6/1/2018",
    time: '4:00pm'
  },
  {
    id: 3,
    location_id: 1,
    driver_id: 3,
    car_capacity: '2',
    seats_remaining: 1,
    car_type: 'tesla roadster',
    date: "6/1/2018",
    time: '4:30pm'
  }
]}

export const mockPickups = {
  pickup: [{
    id: 1,
    ride_id: 1,
    location_id: 1,
    pickup_lat_lng: "40.7359, 73.991"
  },
  {
      id: 2,
      ride_id: 2,
      location_id: 1,
      pickup_lat_lng: "39.758814, -104.987467"
  },
  {
      id: 3,
      ride_id: 3,
      location_id: 1,
      pickup_lat_lng: "39.754572, -104.994299"
  }]
}

export const mockGeoInfo = {
  results: [
  {
      address_components: [
          {
              long_name: "2905",
              short_name: "2905",
              types: [
                  "street_number"
              ]
          },
          {
              long_name: "Inca Street",
              short_name: "Inca St",
              types: [
                  "route"
              ]
          },
          {
              long_name: "Ballpark",
              short_name: "Ballpark",
              types: [
                  "neighborhood",
                  "political"
              ]
          },
          {
              long_name: "Denver",
              short_name: "Denver",
              types: [
                  "locality",
                  "political"
              ]
          },
          {
              long_name: "Denver County",
              short_name: "Denver County",
              types: [
                  "administrative_area_level_2",
                  "political"
              ]
          },
          {
              long_name: "Colorado",
              short_name: "CO",
              types: [
                  "administrative_area_level_1",
                  "political"
              ]
          },
          {
              long_name: "United States",
              short_name: "US",
              types: [
                  "country",
                  "political"
              ]
          },
          {
              long_name: "80202",
              short_name: "80202",
              types: [
                  "postal_code"
              ]
          }
      ],
      formatted_address: "2905 Inca St, Denver, CO 80202, USA",
      geometry: {
          bounds: {
              northeast: {
                  lat: 39.7605492,
                  lng: -104.9985402
              },
              southwest: {
                  lat: 39.7585045,
                  lng: -104.999928
              }
          },
          location: {
              lat: 39.7594866,
              lng: -104.9994026
          },
          location_type: "ROOFTOP",
          viewport: {
              northeast: {
                  lat: 39.7608758302915,
                  lng: -104.9978851197085
              },
              southwest: {
                  lat: 39.7581778697085,
                  lng: -105.0005830802915
              }
          }
      },
      place_id: "ChIJa03a9uh4bIcRdCWS9ci8nqY",
      types: [
          "establishment",
          "point_of_interest",
          "premise"
      ]
  }
]}

