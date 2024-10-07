const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

// Planning:
// create a function
// first paramVariable if under 13 need to be asked to "leave" => "You are not allow to drink! Please leave"
// second paramVariable if between 13 and 19, console.log will be "Grow up to 19 before they can drink"
// third paramvariable if between 19 and 50, console.log will be "Yay you can drink"
// forth paramvariable if they > 50, console.log will be waning them about their health => "Drinking may harm your health! Careful!!"
// fifth paramvaribale if they > 70, console.log will be warning them about their life => "Eating healthy would be better for you!"

//create function startApp
//then Ask question "Hello! We may need to ask your age if you are old enough to get in the bar. Please type in your age here! "



//determine a proper parameter variable name
function CheckDrinkingAge(paramVariable){
  if(paramVariable < 13){
    console.log('You are not allow to drink! Please leave');
  } else if(paramVariable >= 13 && paramVariable < 19){
    console.log("Grow up to 19 so you can drink");
  } else if(paramVariable <= 19 && paramVariable < 50){
    console.log("Yay you can drink");
  } else if(paramVariable >= 50 && paramVariable < 70){
    console.log("Drinking may harm your health! Careful!!");
  } else if(paramVariable >= 70){
    console.log("Eating healthy would be better for you!");
  }
}

//determine a proper question to ask and the proper variable name for user input
function startApp(){
readline.question('Hello! We may need to ask your age if you are old enough to get in the bar. Please type in your age here! ', age => {
  CheckDrinkingAge(Number(age));

  if (age !== "exit"){
    startApp();
  }else { 
    readline.close();
  }
  

});
}
startApp();