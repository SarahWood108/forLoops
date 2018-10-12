// ## 12

// Write a function `insertDash` that accepts a number as a 
// parameter and returns the parameter with a dash inserted between 2 odd numbers.

// ```
// console.log(insertDash(454793));
// => 4547-9-3
// ```

// function insertDash(num) {
//     let newArray = [];
//     let numArray = num.toString().split('');
//     for (let i = 0; i < numArray.length - 1; i++) {
//         let firstNum = numArray[i];
//         let secondNum = numArray[i + 1];
//         if ((numArray[i] % 2 !== 0) && (numArray[i + 1] % 2 !== 0)) {
//             newArray.push(firstNum);

//             newArray.push('-');
//         } else {
//             newArray.push(firstNum);
//         }
//         if (i === numArray.length - 2) {
//             newArray.push(secondNum);
//         }
//     let newString = newArray.join('');
//     return newString;
// }
// insertDash(454793)
// console.log(insertDash(454793));
      

function insertDash(string) {
    let array = string.split(""),
        i = array.length;
 
    while (i--) {
        if (array[i] % 2 && array[i + 1] % 2) {
            array.splice(i + 1, 0, '-');
        }
    }
    return array.join('');
 }
 
 console.log(insertDash("454793"));

