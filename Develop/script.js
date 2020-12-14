/*
When "Generate Password" button is pressed
  I ask for how many characters it should be
    My options range from 8-128
  I ask what characters I would like
    I can choose:
      lowercase, uppercase, number, and/or special characters
      I must pick at least one of these criteria
  Depending on the 4 prompts picked:
    I run a function that generates an array the length of ammount of characters picked
      Within that function I have 4 functions for:
        Uppercase
        Lowercase
        Numbers
        Special characters
      I validate that there is at least one of whichever prompt I picked
    I then return a password and display it in the "Your secure password section"

*/

//Variable Declaration Section
var chooseCharLength
var yesUpperCase
var yesLowerCase
var yesNumbers
var yesSpecialChar

//ASCII Section

var charSelect = {
  charUpperCase = charLoop(65, 90),
  charLowerCase = charLoop(97, 122),
  charNumber = charLoop(48, 57),
  charSpecial = charLoop(33, 47).concat(
    charLoop(58, 64)
  ).concat(
    charLoop(91, 96)
  ).concat(
    charLoop(91, 96)
  ).concat(
    charLoop(123, 126)),
}

function charLoop()

//Choosing a Character Length Section
var chooseCharLength = parseInt(prompt("How long would you like your password to be? (Please choose between 8-128 characters)"));

while (chooseCharLength < 8 || chooseCharLength > 128 || !chooseCharLength) {
  window.alert("Please enter in a valid character length (Please choose between 8-128 characters");
  chooseCharLength = parseInt(prompt("How long would you like your password to be? (Please choose between 8-128 characters)"));
}


//Prompt for which character you would like to use
if (chooseCharLength) {
  yesUpperCase = confirm("Would you like your password to contain Upper Case letters?");
  yesLowerCase = confirm("Would you like your password to contain Lower Case letters?");
  yesNumbers = confirm("Would you like your password to contain Numbers?");
  yesSpecialChar = confirm("Would you like your password to contain Special letters?");
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("For CIA's records: " + passwordText);