//Testing 
console.log(number([[10,0],[3,5],[5,8]])); // Expected result 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // Expected result 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); // Expected result 21
console.log(number([[0,0]])); // Expected result 0

//Script
var number = function(busStops){
    let seats = 0;
    for (let stop of busStops) {
        seats += stop[0];
        seats -= stop[1];
    }
    return seats;
}

// Best Practices
//Changed Variable Names to increase readability
//Changed Forof loop to be more descriptive
function calculateRemainingSeats(busStops) {
    let totalSeats = 0;

    for (const [boarded, departed] of busStops) {
        totalSeats += boarded;
        totalSeats -= departed;
    }

    return totalSeats;
}

// Creative Solution
//This code iderates through the bus stop array and reduces it down to a variable rem starting at 0, 
//rem + on - off at each bus stop returns the final passangers remaining on the buss
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);