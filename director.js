function myFunction() {
let directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"];
let text = "";
for (i = 0; i < directors.length; i++) {
    text += directors[i] + " " + "Hi" + " "; 
} 
console.log("Hi"  + " " + text)
}
myFunction()