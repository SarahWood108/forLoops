//Instructions

// take the string "I am a BAMF programmer"

// and return the string in alphabetical order
// function sortAlphabet(string){
// let letters = ["a", "b", "e", "f", "g", "i", "m", "p", "r"]
// let string = "I am a BAMF programmer"
// console.log(string)

// }
// sortAlphabet (string.sort(letters))
// console.log(string)

let sortAlphabet = function(text) {
    return text.slice("").split("").sort("").join(" ");

}
console.log(sortAlphabet ("I am a BAMF programmer"))