// Fizz Buzz! Write a loop that will iterate through numbers from 
// 1 to 100 and log each number in the console.

// - In the loop, every time a number is divisible by 3,
//  the word "Fizz" should appear instead of the number.

// - If the number is divisible by 5, the word "Buzz" should appear instead of the number.

// - If the number is divisible by both 3 and 5, then the word "Fizzbuzz" should appear.

// Hint: Use modulus `%`

// ```
// =>

// 1
// 2
// Fizz
// 3
// 4
// Buzz
// 6
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// Fizzbuzz
// etc...

// ```
function fizzBuzz (){
for (let i = 1; i <= 100; i++){
    if(i % 3 == 0){
    console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    }else if( i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }

}
}
function fizzBuzz ()