//Testing 
console.log(solution(10)) //Expected restult 23

//Script
function solution(number){
    sum = 0;
    for (let i = 1; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
             sum += i;
        }
    }
    return sum;
}

//Creative Solution
//This solution converse the number into an array of numbers below the current number then reduces them to the sum
//Of each index that is divisable by 3 or 5
function solution(number) {
    return Array.from({ length: number - 1 }, (_, index) => index + 1)
        .reduce((sum, i) => (i % 3 === 0 || i % 5 === 0) ? sum + i : sum, 0);
}
