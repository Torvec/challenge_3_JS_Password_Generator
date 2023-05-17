// ALL THE CHARACTERS THAT CAN BE USED IN A PASSWORD
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'', '\(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\[', '\\', '\]', '^', '_', '`', '{', '|', '}', '~'];
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
    // PROMPT USER TO ENTER A NUMBER BETWEEN 8 AND 128, THE NUMBER WILL BE USED IN A FOR LOOP AT THE END
    passLength = prompt("Enter a number between 8 and 128 for your desired password length:")
    if (passLength >= 8 && passLength <= 128){
      var userSelectChars = [];
        // GO THROUGH EACH CONFIRM TO DETERMINE WHAT CHARACTERS SHOULD GO IN THE PASSWORD
        if(confirm("Do you want special characters in your password?")) {
          userSelectChars = userSelectChars.concat(specialChar);
          console.log(userSelectChars);
        }
        if(confirm("Do you want upper case letters in your password?")) {
          userSelectChars = userSelectChars.concat(upperLetters);
          console.log(userSelectChars);
        }
        if(confirm("Do you want lower case letter in your password?")) {
          userSelectChars = userSelectChars.concat(lowerLetters);
          console.log(userSelectChars);
        }
        if(confirm("Do you want numbers in your password?")) {
          userSelectChars = userSelectChars.concat(numbers);
          console.log(userSelectChars);
        } 
        // IF THE USER SELECTS CANCEL ON EVERY CONFIRM THEN THIS ALERT SHOWS
        if (userSelectChars.length === 0) {
          alert("You didn't pick any characters to put in your password! Try Again.")
          return "Try Again";
        } else {
          var password = '';
          // ITERATE THROUGH LOOP BASED OFF OF NUMBER USER ENTERED IN PROMPT, CREATE A RANDOM NUMBER TO PICK A RANDOM INDEX FROM userSelectChars ARRAY THAT WAS CREATED BY CONFIRMING WHICH ARRAYS GOT CONCAT'ED INTO IT
          for (var i=0; i<passLength; i++) {   
            var randomNum = Math.floor(Math.random() * userSelectChars.length);
            password += userSelectChars[randomNum];
          }
          // DISPLAY THE PASSWORD IN THE CONSOLE AND TEXTAREA
          console.log("Your randomly generated password is: " + password);
          return password;
        }
    } else {
        // THIS HAPPENS IF YOU CANCEL EVERY CONFIRM MESSAGE (CANCEL = FALSE)
        alert("That is not a number between 8 and 128. Try again.");
        return "Try Again";
    }
};

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