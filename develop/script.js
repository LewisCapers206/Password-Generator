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

function generatePassword() {
  password = window.prompt("How many characters would you like your password to contain?")
  if (password < 8) {
    window.alert("Password is not long enough");
  } else if  (password > 128) {
    window.alert("Password must be less than 129 characters")
  } else (password < 129 && password < 8) 
    console.log(getRandomLength)


  password = window.confirm("would you like to include special characters?");
  if (password == true) {
    console.log(getRandomSymbol())
  } else (password == false)
    console.log();

  password = window.confirm("would you like to include numbers?");
  if (password == true) {
    console.log(getRandomNumber())
  } else (password == false)
    console.log();

  password = window.confirm("would you like to include uppercase letters?");
  if (password == true) {
    console.log(getRandomUpper())
  } else (password == false)
    console.log();

  password = window.confirm("would you like to include lowercase lettters?");
  if (password == true) {
    console.log(getRandomLower())
  } else (password == false)
    console.log();



  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  } 

  function getRandomSymbol() {
    var symbols = "!@#$%^&*_+-=";
    return symbols [Math.floor(Math.random() * symbols.length)];
  } 

  function getRandomLength() {
    return (Math.floor(Math.random() * 128) + 8)
  }

 
  //console.log(getRandomNumber());
  //console.log(getRandomUpper());
  //console.log(getRandomLower());
  //console.log(getRandomLength());
  
};



 

//const randomfunc = {
//  lower: getRandomLower,
//  upper: getRandomUpper,
//  number: getRandomNumber,
//  symbol: getRandomSymbol
//  
//};


//functions that generate random numbers and letters

//function getRandomLower() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}
//
//function getRandomUpper() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}
//
//function getRandomNumber() {
//  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//} 
//
//function getRandomSymbol() {
//  var symbols = "!@#$%^&*_+-=";
//  return symbols [Math.floor(Math.random() * symbols.length)];
//} 
//
//function getRandomLength() {
//  return (Math.floor(Math.random() * 128) + 8)
//}


//console.log(getRandomSymbol());
//console.log(getRandomNumber());
//console.log(getRandomUpper());
//console.log(getRandomLower());
//console.log(getRandomLength());