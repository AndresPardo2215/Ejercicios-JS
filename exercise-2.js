// excercise 2
//Write a function that:
// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]


let arr2 = [3,5,2,1,1];
    
let newArray = arr2.map(function(element){
        return element *2;
    });

console.log(newArray)