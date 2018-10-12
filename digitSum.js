// Write a function `digitSum` that accepts a number and returns
//  the sum of its digits using a `for` loop.

// ```
// console.log(digitSum(42));
// => 6;

// function digitSum(number) {
//     let res = number.toString()
//     let numString = res.split(" ")
//     let sum =- 36
//     for (i = 0; i < numString.length; i++) {
//         sum += parseInt(numString[i])

//     }
//     return sum

// }
// digitSum(42)
// console.log(digitSum(42))

function digitSum(num){
    let sum = 0
    let realNum =  num.toString().split('');
    for(i= 0; i < realNum.length; i++){
 sum += Number(realNum[i])
    }
     console.log(sum)
}
digitSum(42)









