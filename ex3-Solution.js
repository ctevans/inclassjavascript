
/**
 * Ex:
 * In this exercise, you're going to build a JS object of your own to represent a hotel.
 * Properties of the hotel object should include the name of the hotel (The Quay), the 
 * total number of rooms (40), the current number of rooms booked (25), an array of the 
 * types of rooms (twin, double, suite), and function to check the availability.
 * 
 * One you've created your object, create a loop to log to the console all of the room types one-by-one. Then, update the booked rooms to 30, check the new availability, and output that using console.log
 *
 */
var hotel = {
    name: "The Quay",
    totalNumRooms: 40,
    bookedRooms: 25,
    roomTypes: [ "twin", "double", "suite"],
    avaliability: function() {
        return this.totalNumRooms - this.bookedRooms;
    }
}

console.log(hotel.avaliability());

hotel.roomTypes.forEach(element => {
    console.log(element);
});

for(var i = 0; i < 10; i++){
    
}

hotel.bookedRooms = 30;

console.log(hotel.avaliability());