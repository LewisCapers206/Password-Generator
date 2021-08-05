var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letters = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = '!@#$%^&*';
var numbers = '1234567890';

var pwd = '';

var letterSelect = false;
var capSelect = false;
var specialSelect = false;
var numberSelect = false;



var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatepassword);

function generatepassword() {
  var confirmLength = '';
  while (isNaN(confirmLength) || confirmLength <8 || confirmLength > 128) {
    confirmLength = prompt("How long would you like your password to be? (Must be between 8-128)");
    if(confirmLength === null) {
      break;
    }
  }

  if (confirmLength) {
    if (confirm("Would you like to use uppercase letters?") == true) {
      capSelect = true
    }

    if (confirm("Would you like to use lowercase letters?") == true) {
      letterSelect = true
    }

    if (confirm("Would you like to use special characters?") == true) {
      specialSelect = true
    }

    if (confirm("Would you like to use numbers?") == true) {
      numberSelect = true
    }

    if (capSelect === false && letterSelect === false && specialSelect === false && numberSelect === false) {
      alert("YOU HAVE TO SELECT AT LEAST ONE CHARACTER TYPE PLEASE!")
    }
  }

  var characters = '';
  characters += (letterSelect ? letters : '');
  characters += (capSelect ? capLetters : '');
  characters += (specialSelect ? specialChar : '');
  characters += (numberSelect ? numbers : '');

  pwd = password(confirmLength, characters);

  document.getElementById("password").innerHTML = pwd;
}

function password(l, characters) {
  var pwd = '';
  for (let i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;

}





