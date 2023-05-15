// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
//    THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
//    THEN I select which criteria to include in the password 

// WHEN prompted for the length of the password
//    THEN I choose a length of at least 8 characters and no more than 128 characters
//      PROMPT(), USER INPUTS A NUMBER BETWEEN 8 AND 128, CHECK IF IT IS A NUMBER BETWEEN 8 AND 128/IS A NUMBER AT ALL, IS BLANK --> WHILE LOOP?

// WHEN asked for character types to include in the password
//    THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//      CONFIRM(LOWERCASE THEN UPPERCASE THEN NUMERIC THEN SPECIAL CHAR) --> CHECK THAT AT LEAST ONE OF THAT TYPE WAS SELECTED

// WHEN I answer each prompt
//    THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
//    THEN a password is generated that matches the selected criteria

// WHEN the password is generated
//    THEN the password is either displayed in an alert or written to the page

// Assignment code here
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
console.log(specialChar);
var randomSpecialChar = Math.floor(Math.random() * specialChar.length);
console.log(specialChar[randomSpecialChar]);

var passwordMaxLength = 128;
var passwordMinLength = 8;
 var generatePassword = "something"; // prompt("Is this thing on?");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
