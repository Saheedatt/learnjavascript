//JavaScript can send network requests to the server and load new information whenever is needed.We can use network requests to submit an order, load user information or receive latest information from the server, etc...all of this without reloading the page!\
//There is an umbrella term "AJAX"(Asynchronous JavaScript And Xml) that is used to describe the process of sending and receiving data from the server without reloading the page.The fetch() method is a method of sending network request to a server.It's syntax is:
let promise = fetch(url, [options]);
//url = the url to access
//options = optional parameters: method, headers, body, etc...
//Without options, that is a simple GET request, downloading the contents of the url.
/*Getting a response is usually a two stage process
+First, a promise is returned when fetch is called, that promise is resolved with the response object when the server responds with headers. At this stage, we can check HTTP status, to see whether it is successful or not.
+Second, to get the response body, we need to use an additional method call. Response proivdes multiple promise-based methods to access the body in various formats:
response.text(),response.json(), response.formData(), response.blob(), response.arrayBuffer()
*/

//Explain response headers and request headers in class

/*POST requests: To make a POST request with another method, we need to use  fetch options:
method - HTTP-method e/g POST,
body - the request body, one of:
        a string(e/g a JSON-encoded),
        FormData object, to submit the data as form/multipart
        Blob/BufferSource to send binary data
        URLSearchParams, to submit the data in x-www-form-urlencoded encoding,rarely used.
    The JSON format is mostly used.
    For example, this code submits user object as JSON:
*/
let user = {
  name: "Eniola",
  surname: "Ajayi",
};
let response1 = await fetch("article/fetch/post/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(user),
});
let result1 = await response1.json();
console.log(result1.message);

//We can also send an image with fetch.

//A typical fetch request contains two await calls:
let response = await fetch(url, options);
//resolves with response headers
let result = await response.json();
//read body as json

//or without await:
fetch(url, options).then((response) => response.json());
    .then (result => /*process result*/)
//OR
fetch(url, options)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle errors
  });

fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    // Handle the parsed data
  })
  .catch((error) => {
    // Handle errors during the fetch
  });
//Request Options: You can customize the request by providing options in the second parameter of fetch().
//Method: The HTTP method to use, like GET, POST, PUT, DELETE, etc.
// Headers: Additional headers to include in the request.
// Body: Data to be sent with the request, usually used in POST requests.
//Example:
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // other headers...
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data
  })
  .catch((error) => {
    // Handle errors
  });
//Cross-Origin Requests: By default, fetch follows the same-origin policy. If you need to make cross-origin requests, you might need to include the mode option:
fetch("https://api.example.com/data", { mode: "cors" })
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data
  })
  .catch((error) => {
    // Handle errors
  });
//Task:
//Create an async fuction getUsers(names), that gets an array of Github logins, fetched the users fron github and returns an array of github users.The github url to be used is: https://api.github.com/users/USERNAME. There should be one fetch request per user.Requests shouldn't wait for each other.If request fails, function should return null in the resulting array.
async function getUsers(names) {
  const baseUrl = "https://api.github.com/users/";

  // Use Promise.all to parallelize the fetch requests
  const promises = names.map(async (username) => {
    try {
      const response = await fetch(baseUrl + username);

      if (!response.ok) {
        // If the request is not successful, return null
        return null;
      }

      const user = await response.json();
      return user;
    } catch (error) {
      // If there's an error during the fetch, return null
      return null;
    }
  });

  // Wait for all promises to resolve
  const users = await Promise.all(promises);

  return users;
}

// Example usage
const githubUsernames = ["user1", "user2", "user3"];
getUsers(githubUsernames)
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// The getUsers function takes an array of GitHub usernames.
// It maps each username to a fetch request using map.
// The fetch requests are wrapped in async functions to use await.
// The Promise.all is used to wait for all fetch requests to complete in parallel.
// If a request fails, it returns null for that user.
// The final array of users (or null values) is returned.
