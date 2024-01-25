// // if else statements
// // if elif else... if... else if...else if... else
// //Basic syntax for conditional statements:
// // if(condition){
// //     //do something
// // }
// //It is always either true of false
// let age = 18;
// if(age >= 18){
//     console.log("You are eligible to vote")
// }

// //if-else statement
// // if(condition){
// //     //do this if it is true
// // }else{
// //     //do this if it is false (otherwise do this)
// // }

// // if(condition){
// //     //do this
// // }else if(condition){
// //     //do this
// // }else if(condition){
// //     //do this
// // }else{
// //     //otherwise do this
// // }

// //switch statements - we will do switch statement when we do functions
// // switch(x){
// //     case 'value1':
// //         ...
// //         [break]
// //     case 'value2':
// //         ...
// //         [break]
// //     case 'value3':
// //         ...
// //         [break]
// //     default:
// //         ...
// //         [break]
// // }

//Example for switch statement
// let x = 2 * 3;
// switch(x){
//     case 1:
//         console.log("The answer is 1");
//         break;
//     case 2:
//         console.log('The answer is 6')
//         break
//     case 3:
//         console.log('The answer is 2')
//         break
//     default:
//         console.log('We have an error')
// }

//Ternary operator
//has 3 operands and 2 operators
//The syntax is: condition1 ? do this: do that
let age = 18;
age < 10 ? console.log("You are a child") : console.log("You are an adult");

// let message;
// if(login =='Employee'){
//     message = 'Hello';
// }else if(login =='Director'){
//     message = 'Greetings'
// }else if(login == ''){
//     message = 'No login'
// }else{
//     message = ''
// }
//The above code can be written as:

let login = "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

/*if else amd switch statement are used to determine the flow of the program based
 on wheter or not the same conditions have been met. They are sometimes referred to as flow control statement.*/

//Examples
// let isRainy = false;
// let weatherMessage = isRainy ? "Remember to take your umbrella" : "No need for an umbrella"

// console.log(weatherMessage);

// let isRainy = false;
// if (isRainy) {
//   console.log("Remember to take your umbrella");
// } else {
//   console.log("No need for umbrella");
// }

// let message;
// if(login =='Employee'){
//     message = 'Hello';
// }else if(login =='Director'){
//     message = 'Greetings'
// }else if(login == ''){
//     message = 'No login'
// }else{
//     message = ''
// }

//The above code can be written as:
// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";


function checkDay(day){
    switch (day){
        case 'Monday':
            console.log('Today is Monday')
            break
        case 'Tuesday':
            console.log('Today is Tuesday')
            break
        case 'Wednesday':
            console.log('Today is Wednesday')
            break
        case 'Thursday':
            console.log('Today is Thursday')
            break
        case 'Friday':
            console.log('Today is Friday')
            break
        case 'Saturday':
            console.log('Today is Saturday')
            break
        case 'Sunday':
            console.log('Today is Sunday')
            break
        default:
            console.log('Invalid day')
}
}
console.log(checkDay('Tuesday'))