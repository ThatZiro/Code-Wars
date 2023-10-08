//Testing 
var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
console.log(printerErrors(s)) //Expected Result "3/56"

//Script
function printerErrors(s){
    return `${s.length - s.replace(/[^a-m]/g,"").length}/${s.length}`;
}

//Creative Solution
//Using an arrow function to reduce to a single line
//Count the valid characters rather then the invalid characters
//Accounts for case insensitvity
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
