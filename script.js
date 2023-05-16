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

var specialChar = ['!', '"', '#', '$', '%', '&', '\'', '\(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\[', '\\', '\]', '^', '_', '`', '{', '|', '}', '~'];
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allChars = specialChar.concat(upperLetters, lowerLetters, numbers);

function pickPassLength(){
    while(true) {
        var theLength = prompt("Password length: Pick a number between 8 and 128");
        if (theLength < 8 || theLength > 128) {
            alert("The number you entered is too high or too low");
            continue;
        } else if (isNaN(theLength) === true) {
            alert("You didn't put a number in!");
            continue;
        } else if (theLength === null) { // THIS DOESN'T DO ANYTHING
            alert ("You didn't enter anything!");
            continue;
        } else {
            alert("Your password length will be " + theLength + " characters long")
            break;
        }
    }
}

function generatePassword(userSelectNum) {
    // PROMPT USER TO PUT NUMBER IN AND STORE IT IN userSelectNum
    userSelectNum = prompt("Pick a number between 8 and 128")
    // CHECK IF IT IS WITHIN THE LIMITS
    if (userSelectNum >= 8 && userSelectNum <= 128){
        // ITERATE FROM 0 TO THE NUMBER THE USER INPUT AND USE RANDOM NUMBERS TO PICK FROM THE ENTIRE allChars ARRAY TO OUTPUT AS A STRING IN randomPass
        var randomPass = '';// DECLARE EMPTY STRING
        for(var i=0;i<userSelectNum;i++){
                
            randomPass += [allChars[Math.floor(Math.random(i) * allChars.length)]];
        }
        console.log("Your randomly generated password is: " + randomPass);
    } else {
        alert("That is not a number between 8 and 128");
    }
};
// generatePassword();
// pickPassLength();

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
