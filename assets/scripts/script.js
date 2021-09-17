var generateBtn = document.querySelector("#generate");

function generatePassword(){

//This prompt requires user input to determine how long the password should be. The while loop is used to verify that the password has between 8 and 128 characters.
var passwordLength = window.prompt("How many characters would you like your password to contain?");
while (passwordLength < 8 || passwordLength > 128){
    passwordLength = window.prompt("Password must be between 8 and 128 characters. How many characters would you like your password to contain?");
}

//These confirmations are used to determine which character sets will be used in the passwordArray. Output to the console is to verify that the boolean values are correct.
var chooseSpecial = window.confirm("Would you like special characters?");
var chooseNum = window.confirm("Would you like numeric characters?");
var chooseUpper = window.confirm("Would you like uppercase characters?");
var chooseLower = window.confirm("Would you like lowercase characters?");
console.log(chooseSpecial, chooseNum, chooseUpper, chooseLower);

//These create arrays of possible characters to populate the passwordArray 
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
console.log(specialChar);
var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numList);
var upperCaseChar =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Here the possibleChar array is created and a series of if statements are used to add character sets to the array. Boolean values are checked and the character sets are added if true. Console output is to verify that the possible character array  is correct.
var possibleChar = [];
if (chooseSpecial) {
    possibleChar = possibleChar.concat(specialChar);
}
if (chooseNum){
    possibleChar = possibleChar.concat(numList);
}
if (chooseUpper){
    possibleChar = possibleChar.concat(upperCaseChar);
}
if (chooseLower){
    possibleChar = possibleChar.concat(lowerCaseChar);
}
console.log(possibleChar);

//This if statement verifies there are some character sets available for the password. If there aren't then it has the user start over.
if(possibleChar.length===0){
    window.alert("Some type of characters are required. Please start again.")
    return generatePassword();
}

//This first takes the string from the passwordLength prompt and creates an integer value passwordLengthInt. Then it creates a passwordArray with the length defined by passwordLengthInt. The for loop iterates through the array pushing random characters from the possibleChar array.
var passwordLengthInt = Number(passwordLength);
var passwordArray = [];
for (var i=0; i<passwordLengthInt; i++){
    var randomNumber = Math.floor(Math.random() * possibleChar.length);
    passwordArray.push(possibleChar[randomNumber]); 
}
return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
