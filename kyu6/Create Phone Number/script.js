//Testing
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //Expected restult "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //Expected restult "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //Expected restult "(123) 456-7890"

//Script
const createPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
    .slice(6)
    .join("")}`;

//Creative Solution
//This solution joins the array and uses Regex to format them
//Grabing the \d{3} 1st set of 3 numbers, then the 2nd set of 3, then the 3rd set of 4
//Then formating them using $1 $2 and $3 with proper formating "($1) $2-$3"
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
