// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  var userCharSelection = [];
  var userPassword = [];

  //Variables that store uppercase and lowercase letters, numbers, and special characters in a string
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!#$&@&()?/\-=+<>~";

  //a series of prompts and confirms to allow us to collect user preferences to meet their desired password criteria
  var pwLength = prompt("How many characters do you want in your password? (8-128 maximum");
  //specifies password length params and returns a message if they specify anything outside the parameters, ie value too big, small, or not a numerical value at all, and stores user inputs in variables
  if (pwLength > 7 && pwLength < 129) {
    console.log(pwLength)
    var uc = confirm("Would you like your password to have uppercase letters? \n 'Ok' for 'Yes', 'Cancel' for 'No'");
    //takes stored boolean variables and pushes them into the userCharSelection Array if they answered true
    if(uc){
      userCharSelection.push(...upperCase)
    }
    console.log(userCharSelection)

    var lc = confirm("Would you like your password to have lowercase letters? \n 'Ok' for 'Yes', 'Cancel' for 'No'");
     if(lc){
      userCharSelection.push(...lowerCase)
    }
    console.log(userCharSelection)

    var num = confirm("Would you like your password to have numbers? \n 'Ok' for 'Yes', 'Cancel' for 'No'");
    if(num){
      userCharSelection.push(...numbers)
    }
    console.log(userCharSelection)
    var sym = confirm("Would you like your password to have symbols? \n 'Ok' for 'Yes', 'Cancel' for 'No'");
    if(sym){
      userCharSelection.push(...symbols)
    }
    console.log(userCharSelection);

    //takes all the newly stored variables from the userCharSelection, randomly generates variables from that array in a loop however many times specified in pwLength. Then it joins all the variables together in the userPassword variable
    for (let i = 0; i < pwLength; i++ ){
      userPassword.push(userCharSelection[Math.floor(Math.random() * userCharSelection.length)]);
      console.log(userPassword.join("+"));
    }
    
    var passwordText = document.querySelector("#password");
    passwordText.value = userPassword.join("");
    
    //this part says that if the user marks "no" for all of the criteria, to display an error message and restart the function from the beginning
    if (uc+lc+num+sym == 0){
    alert("You must mark 'yes' in at least ONE criteria");
    writePassword();
    }

  } else {
    alert ("You MUST choose a numeric value between 8 and 128");
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//TODO: Write the generatePassword function
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: ask the user how many characters they want in the password > use a prompt which will be set to a var > make sure the info in correct > number > 8+ or 128
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special character
//TODO: Write a series of 4 confirms > set these to be a var > to check if the user wants
//TODO: Write 4 arrays one for lowercase, one upper, number, and special
//TODO: Check that hte prompts true or false > using above var for this > add associated arrays to a "holding array" upperConfirm > true > uppsercase[] > add to holding[]
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//TODO: take our holding array and randomize the characters > adding to the second array
//TODO: take the randomized character and select the amount the user has chosen for the password length > add these to a "return array" > for loop the length for this with the user password length clo 3rd array to make sure its the right length
//WHEN the password is generated 
//THEN the password is either displayed written to the page
//TODO: take our return array and use array methods to convert to a string > hve a var for this and return string to clo tho