//assignment code goes here
var password = document.getElementById("password");
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like to have?");
  var capitalChar = window.confirm("Would you like captial letters?");
  var specialChar = window.confirm("Would you like special symbols?");
  var numChar = window.confirm("Would you like Numbers?");

  if (capitalChar && specialChar && numChar) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }
  
  if (capitalChar && specialChar && !numChar) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }
  
  if (capitalChar  && numChar && !specialChar) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }


  if (capitalChar && !specialChar && !numChar) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }
  


  

  if (specialChar && numChar && !capitalChar) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }

  if (specialChar && !numChar && !capitalChar) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }


  if (numChar && !specialChar && !capitalChar) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }
  if (!specialChar && !numChar && !capitalChar) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);

    }
  }


  


  
    
  
  return password;
  debugger;
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




/*var password = document.getElementById("#password");
function generatePassword() {
  
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("#password").value = password;
}*/