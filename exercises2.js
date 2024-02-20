1; //Create a function that takes a date as a parameter and prints the date in the format: Month Day, Year (e.g., "February 8, 2024").
function printDate(date) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  console.log(formattedDate);
}
const myDate = new Date("2024-02-08T12:30:00.000Z");
printDate(myDate);

2; //Write a function that calculates and returns the age of a person based on their birthdate.
function calculateAge(birthdate) {
  const today = new Date();
  const birthdateObj = new Date(birthdate);

  let age = today.getFullYear() - birthdateObj.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    today.getMonth() < birthdateObj.getMonth() ||
    (today.getMonth() === birthdateObj.getMonth() &&
      today.getDate() < birthdateObj.getDate())
  ) {
    age--;
  }

  return age;
}

const birthdate = "1990-05-15";
const age = calculateAge(birthdate);
console.log(`The person is ${age} years old.`);

3; //Create a function that takes two dates as parameters and calculates the difference in days between them.
function calculateDateDifference(date1, date2) {
  // Convert input strings to Date objects
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  // Calculate the time difference in milliseconds
  const timeDifference = endDate - startDate;

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const startDate = "2024-02-01";
const endDate = "2024-02-10";

const differenceInDays = calculateDateDifference(startDate, endDate);
console.log(
  `The difference in days between the two dates is ${differenceInDays} days.`
);

4; //Extend the previous function to also display the difference in hours, minutes, and seconds.
function calculateDateTimeDifference(date1, date2) {
  const startDate1 = new Date(date1);
  const endDate1 = new Date(date2);

  const timeDifference = endDate1 - startDate1;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

  console.log(`Difference in days: ${daysDifference} days`);
  console.log(`Difference in hours: ${hoursDifference} hours`);
  console.log(`Difference in minutes: ${minutesDifference} minutes`);
  console.log(`Difference in seconds: ${secondsDifference} seconds`);
}

const startDate1 = "2024-02-01T12:00:00";
const endDate1 = "2024-02-10T18:30:45";

calculateDateTimeDifference(startDate1, endDate1);

5; //Write a function that takes a date and a target timezone as parameters and prints the date in the specified timezone.
function convertDateToTimeZone(inputDate, targetTimeZone) {
  const options = {
    timeZone: targetTimeZone,
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(inputDate)
  );

  console.log(`Original Date: ${inputDate}`);
  console.log(`Converted Date in ${targetTimeZone} Timezone: ${formattedDate}`);
}

const originalDate = "2024-02-08T12:30:00.000Z"; // UTC Time
const targetTimeZone = "America/New_York";

convertDateToTimeZone(originalDate, targetTimeZone);

6; //Create a function that lists all timezones using the Intl.DateTimeFormat().resolvedOptions().timeZone method.
function listAllTimezones() {
  const timezones = [];

  // Iterate through all available locales
  Intl.DateTimeFormat.supportedLocalesOf().forEach((locale) => {
    const options = { timeZone: "UTC" }; // Using UTC to get the list of all timezones
    const timezone = new Intl.DateTimeFormat(locale, options).resolvedOptions()
      .timeZone;

    if (!timezones.includes(timezone)) {
      timezones.push(timezone);
    }
  });

  return timezones;
}

const allTimezones = listAllTimezones();
console.log("All Timezones:");
console.log(allTimezones);

7; //Write a function that converts a given epoch time to a readable date.
const now = new Date();
const epochTime = now.getTime();
console.log(`Epoch time: ${epochTime}`);

function convertEpochToReadableDate(epochTime) {
  const date = new Date(epochTime);
  return date.toUTCString();
}
console.log(convertEpochToReadableDate(epochTime));

8; //Create a function that calculates the time elapsed since a specific event (given in epoch time).

9; //Implement a function that performs a time-consuming operation (e.g., a loop that runs a million times).

10; // Use Date.now() to measure and print the time it takes for the operation to complete.

11; //Create a function that formats a given date as "YYYY-MM-DD HH:mm:ss" (e.g., "2024-02-08 12:30:00").

12; //Write a function that formats the current date and time in the user's preferred locale.

13; // Create an array of objects, each representing a book with properties like title, author, and year. Loop through the array and print information about each book.
let books = [
  { title: "The silent patient", author: "Alex Michaelides", year: 2019 },
  { title: "The Night Circus", author: "Erin Morgenstern", year: 2011 },
  { title: "The Book Thief", author: "Markus Zusak", year: 2005 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];
for (const book of books) {
  console.log(`Title: ${book.title}`);
}
const selectedBook = books[1];
console.log(
  `Selected book: ${selectedBook.title} by ${selectedBook.author} (${selectedBook.year})`
);
14; //Create an object with nested properties. For example, an object representing a car with properties like make, model, and engine, where engine itself is an object with properties like type and horsepower.
let car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "V6",
    horsepower: 200,
  },
};
console.log(car.make);

