//Error handling in JavaScript is a crucial aspect of writing robust and reliable code. There are several mechanisms for handling errors in JavaScript, including the try...catch statement, custom errors, and extending the Error class.

//try...catch: The try...catch statement allows you to handle exceptions (errors) in a controlled manner. Code that might throw an exception is placed inside the try block, and if an exception occurs, it's caught and handled in the catch block. Here's a basic example:
try {
  // Code that might throw an exception
  throw new Error("This is an example error");
} catch (error) {
  // Handle the exception
  console.error("Caught an error:", error.message);
}
//In this above example, if an error occurs inside the try block, it is caught, and the error message is logged to the console.

//Custom Errors: You can create your own custom error types by extending the built-in Error class. This allows you to define specific error types for different situations in your application. Custom errors can include additional properties and methods to provide more information about the error.
class CustomError extends Error {
  constructor(message, additionalInfo) {
    super(message);
    this.name = "CustomError";
    this.additionalInfo = additionalInfo;
  }
}

try {
  throw new CustomError("This is a custom error", {
    details: "Additional information",
  });
} catch (error) {
  if (error instanceof CustomError) {
    console.error(
      "Caught a custom error:",
      error.message,
      error.additionalInfo
    );
  } else {
    console.error("Caught an error:", error.message);
  }
}
//Here, CustomError is a custom error class that extends the built-in Error class. When caught, you can check the type of the error to handle it appropriately.

//Extending Error: You can extend the Error class directly to create custom error types without adding any additional properties or methods. This is useful when you don't need extra functionality beyond what the standard Error class provides.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.error("Caught a custom error:", error.message);
}
//Extending Error allows you to take advantage of the standard error handling mechanisms in JavaScript.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return NaN; // Return NaN in case of an error
  }
}

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(5, 0)); // Error: Cannot divide by zero, NaN

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}

function loginUser(username, password) {
  if (username !== "user" || password !== "pass") {
    throw new AuthenticationError("Invalid credentials");
  }
  return "Login successful";
}

try {
  console.log(loginUser("user", "pass")); // Login successful
  console.log(loginUser("invalid", "password")); // AuthenticationError: Invalid credentials
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error("Authentication Error:", error.message);
  } else {
    console.error("General Error:", error.message);
  }
}

class FileReadError extends Error {
  constructor(filePath) {
    super(`Error reading file: ${filePath}`);
    this.name = "FileReadError";
  }
}

function readFileContent(filePath) {
  try {
    // Simulate file reading
    if (filePath !== "example.txt") {
      throw new FileReadError(filePath);
    }
    return "File content goes here";
  } catch (error) {
    throw error; // Re-throw the custom error for handling outside the function
  }
}

try {
  console.log(readFileContent("example.txt")); // File content goes here
  console.log(readFileContent("invalid.txt")); // UnhandledError: Error reading file: invalid.txt
} catch (error) {
  if (error instanceof FileReadError) {
    console.error("File Read Error:", error.message);
  } else {
    console.error("Unhandled Error:", error.message);
  }
}
