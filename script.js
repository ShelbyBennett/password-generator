// Assignment code here
var length=0
var userchoices= []
var result= ""
var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialchar= [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];

function generatePassword (){
  while(length <8 ||length >128 || isNaN(length) || length==="" ){
    length= prompt ("please enter a password between 8 and 128 characters")
  }
  var uppercaseconfirm= confirm("would you like uppercase letters on your password?")
  var lowercaseconfirm= confirm("would you like lowercase letters on your password?")
  var numbersconfrim= confirm("would you like numbers on your password?")
  var specialcharconfirm= confirm("would you like special characters on your password?")

  if(uppercaseconfirm){
    userchoices=userchoices.concat(uppercase)
  }
  if(lowercaseconfirm){
    userchoices=userchoices.concat(lowercase)
  }
  if(numbersconfrim){
    userchoices=userchoices.concat(numbers)
  }
  if(specialcharconfirm){
    userchoices=userchoices.concat(specialchar)
  }
  if(uppercaseconfirm==false && lowercaseconfirm==false && numbersconfrim==false && specialcharconfirm==false){
    alert("you must choose at least one type of character in order to generate a password") 
    window.location.reload()
  }
  for(let i=0; i<parseInt(length); i++){
    result+=userchoices [Math.floor(Math.random()*userchoices.length)]
  }
  return result 
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
