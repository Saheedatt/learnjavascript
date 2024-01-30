// if else statements
//Basic syntax for conditional statements:
if(condition){
    //do something
}
// It is always either true of false
let age1 = 18;
if(age1 >= 18){
    console.log("You are eligible to vote")
}

//if-else statement
if(condition){
    //do this if it is true
}else{
   //otherwise do this
}

if(condition){
    //do this
}else if(condition){
    //do this
}else if(condition){
    //do this
}else{
    //otherwise do this
}

//switch statements - we will do switch statement when we do functions
switch(x){
    case 'value1':
        //...
        break
    case 'value2':
        //...
        break
    case 'value3':
       // ...
        break
    default:
        //...
        break
}

//Example of switch statements
let x = 2 * 3;
switch(x){
    case 1:
        console.log("The answer is 1");
        break;
    case 2:
        console.log('The answer is 6')
        break
    case 3:
        console.log('The answer is 2')
        break
    default:
        console.log('We have an error')
}
//Trial example using functions(We will still revisit it)
function checkDayType(day){
    switch(day){
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Weekday";
    }
}

console.log(checkDayType('Monday'))
function checkDay(day){
    switch (day){
        case 'Monday':
            return 'Today is Monday'
            break
        case 'Tuesday':
            return 'Today is Tuesday'
            break
        case 'Wednesday':
            return 'Today is Wednesday'
            break
        case 'Thursday':
            return 'Today is Thursday'
            break
        case 'Friday':
            return 'Today is Friday'
            break
        case 'Saturday':
        case 'Sunday'  :
            return 'This is the weekend'
            break
        default:
            return 'Invalid day'
}
} 
console.log(checkDay('Saturday'))

//Ternary operators- A more concise way to write if statements
//At the end of the day, it all boils down to which of them you prefer.
//Ternary operator has 3 operands and 2 operators
//The syntax is:
 
condition1 ? dothis : dothat
//so you could easily see '?' as the if and ':' as the else

let age = 18;
age < 10 ? console.log("You are a child") : console.log("You are an adult");


let login = 'Employee'

let message1 =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : ""; 
console.log(message1);

//rewriting the above ternary as an if-else statemnt:

let message2;
if(login =='Employee'){
    message2 = 'Hello';
}else if(login =='Director'){
    message2 = 'Greetings'
}else if(login == ''){
    message2 = 'No login'
}else{
    message2 = ''
}

/*if else amd switch statement are used to determine the flow of the program based
 on whether or not the same conditions have been met. They are sometimes referred 
 to as flow control statement.*/

// More Examples
let isRainy = false;
let weatherMessage = isRainy ? "Remember to take your umbrella" : "No need for an umbrella"

console.log(weatherMessage);

let isSunny = false;
if (isSunny) {
  console.log("Remember to take your umbrella");
} else {
  console.log("No need for umbrella");
}
