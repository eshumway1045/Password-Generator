//assignment code goes here
var password = document.getElementById("password");
//establishes the variables possible for the string of characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberchar = "0123456789";
var specialCharacters = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//function to build the password.
function generatePassword() {
  //get password length
  var passwordLength = window.prompt("How many characters would you like to have?");
  // validate password length is not left empty
  if (passwordLength === "" || passwordLength === null) {
    generatePassword();
  }

  else {
    //validate passwordLength is between 8 and 128
    if (passwordLength >= 8 && passwordLength <= 128) {
      var charOptions = "";
      var lowerChar = window.confirm("Would you like to have lowercase letters?");
      var capitalChar = window.confirm("Would you like captial letters?");
      var specialChar = window.confirm("Would you like special symbols?");
      var numChar = window.confirm("Would you like Numbers?");
      //adds the lowercase to the character options
      if (lowerChar) {
        charOptions = charOptions + lowercase;
      }
      //adds the uppercase to the character options
      if (capitalChar) {
        charOptions = charOptions + capitalLetters;
      }
      //adds the special characters to the character options
      if (specialChar) {
        charOptions = charOptions + specialCharacters;
      }
      //adds the numbers to the character options
      if (numChar) {
        charOptions = charOptions + numberchar;
      }
      //makes sure that one of the options was chosen by the user.
      if (!capitalChar && !specialChar && !numChar && !lowerChar) {
        generatePassword();
      }
      // randomly selects the Characters for the password.
      if (passwordLength >= 8 && passwordLength <= 128) {
        var password = "";
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * charOptions.length);
          password += charOptions.substring(randomNumber, randomNumber + 1);

        }
      }
    }
    
    else {
      generatePassword();
    }

    return password;

  }
}
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