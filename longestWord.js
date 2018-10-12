// Write a function `longestWord` that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. 
// In case of a tie, the method should return the word that appears first in the array.

// ```
// newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
// console.log(longestWord(newArray));

// => "Peanutbutter"

newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

function longestWord(newArray) {
    let longest = ''
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i].length > longest.length) {
            longest = newArray[i]
        }
    }

    return longest
   

}
longestWord(newArray)
 console.log(" the longest word is " + longestWord(newArray))