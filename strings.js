// Strings like arrays in JavaScript have several built-in methods that you can use to perform various operations. Here's a list of some commonly used string methods:
//1. charAt(index): Returns the character at the specified index in the string.
//2. charCodeAt(index): Returns the Unicode of the character at the specified index in the string.
const str = "Hello";
console.log(str.charAt(0));
console.log(str.charCodeAt(0)); 

//3. concat(str1, str2, ...): Combines two or more strings and returns a new string.
const str1 = "Congratulations";
const str2 = "World";
console.log(str1.concat(" ", str2));

//4. includes(searchValue): Returns true if the string contains the specified value, otherwise false.
const str3 = "Hello World";
console.log(str3.includes("World"));

//5. indexOf(searchValue, startIndex): Returns the index of the first occurrence of the specified value in the string, or -1 if not found.
const str4 = "Hello World";
console.log(str4.indexOf("World"));

//6. lastIndexOf(searchValue, startIndex): Returns the index of the last occurrence of the specified value in the string, or -1 if not found.
const str5 = "Tell me it's alright";
console.log(str5.lastIndexOf("a"));

//7. length: Returns the length of the string.
const str6 = "Commiseration";
console.log(str6.length);

//8. slice(startIndex, endIndex): Extracts a section of the string and returns a new string.
const str7 = "Hello World";
console.log(str7.slice(6, 11));

//9. substring(startIndex, endIndex): Similar to slice, extracts a section of the string and returns a new string.
console.log(str7.substring(6, 11)); 

//10. toUpperCase() / toLowerCase(): Converts all characters in the string to uppercase or lowercase.
const str8 = "I'm in love with you!!!";
console.log(str8.toUpperCase());
console.log(str8.toLowerCase());

//11. trim(): Removes whitespace from both ends of the string.
const str9 = "   Hello   ";
console.log(str9.trim());

//12. replace(searchValue, replaceValue): Replaces a specified value with another value in the string.
const str10 = "Hello World";
console.log(str10.replace("World", "Universe"));

//13. split(separator): Splits the string into an array of substrings based on the specified separator.
const str11 = "apple,orange,banana";
const fruits = str11.split(",");
console.log(fruits);

//There might be other methods available. I guess you will come across them later but for now, these are the most commonly used string methods in JavaScript.

