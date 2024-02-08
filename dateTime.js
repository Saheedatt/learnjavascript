//It stores the dzte, time and provides methods for date and management. We can use it to store creayion/modification times, to measure time, or just to print out the current date.
//Creation
//To create a new Date object call new Date() with one of the following argument:
const currentDate = new Date();
console.log(currentDate);

//Providing Specific Date and Time:
//You can also create a date for a specific moment by providing the year, month (0-11), day, hour, minute, second, and millisecond values:
const specificDate = new Date(2024, 1, 8, 12, 30, 0, 0); // (year, month, day, hour, minute, second, millisecond)
console.log(specificDate);

//Another way is to create a date by parsing a date string: The string format follows ISO 8601 standards.
const dateString = "2024-02-08T12:30:00.000Z";
const parsedDate = new Date(dateString);
console.log(parsedDate);

// Getting Current Date and Time in Specific Formats:
//To get specific parts of the date, you can use methods like getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), and so on:
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 to get the real month
const day = currentDate.getDate();
console.log(`Today's date is ${year}-${month}-${day}`);

//Getting UTC Date and Time:
//JavaScript Date objects provide both local and UTC (Coordinated Universal Time) methods. You can use getUTCFullYear(), getUTCMonth(), etc., to get UTC-specific values.
const utcDate = new Date();
const utcYear = utcDate.getUTCFullYear();
const utcMonth = utcDate.getUTCMonth() + 1;
// ... similar methods for other UTC values
console.log(`UTC date: ${utcYear}-${utcMonth}-${utcDate.getUTCDate()}`);

// Epoch Time (Timestamps):
//Explain the concept of epoch time, which represents the number of milliseconds since January 1, 1970 (UTC). You can convert a date to epoch time using getTime().
const now = new Date();
const epochTime = now.getTime();
console.log(`Epoch time: ${epochTime}`);

//Date Arithmetic:
//Show how to perform basic arithmetic with dates, like adding or subtracting days:
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(`Tomorrow is ${tomorrow}`);

//Formatting Dates:
//Explain how to format dates using libraries or by manually constructing strings using getMonth(), getDate(), etc. Alternatively, use libraries like Intl.DateTimeFormat for more sophisticated formatting.
const formattedDate = new Intl.DateTimeFormat("en-US").format(currentDate);
console.log(`Formatted date: ${formattedDate}`);

// Parsing Dates:
//Teach how to parse strings into Date objects using the Date.parse() method or external libraries like moment.js
const dateString2 = "2024-02-08T12:30:00.000Z";
const parsedDate2 = new Date(Date.parse(dateString));
console.log(parsedDate);

//Handling Time Zones:
//Briefly introduce the concept of time zones and how you can work with them using libraries like moment-timezone or the toLocaleString method.
const dateInNY = new Date();
const options = { timeZone: "America/New_York" };
console.log(dateInNY.toLocaleString("en-US", options));

//Date Difference (Time Interval):
//To find the difference between two dates, subtract one Date object from another. The result is the time difference in milliseconds.
const startDate = new Date("2024-02-08T12:00:00.000Z");
const endDate = new Date("2024-02-10T15:30:00.000Z");
const timeDifference = endDate - startDate; // in milliseconds
console.log(`Time difference: ${timeDifference} milliseconds`);

//Benchmarking with Dates:
//Dates can be used for benchmarking, measuring the time it takes for a specific operation to occur. This can be useful for performance testing.
const startTime = Date.now();

// Perform the operation to be benchmarked

const endTime = Date.now();
const elapsedTime = endTime - startTime;
console.log(`Operation took ${elapsedTime} milliseconds`);
