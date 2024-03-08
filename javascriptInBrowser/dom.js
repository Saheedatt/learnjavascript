//The dom allows us to manipulate existing or write new html
//To create a new projext, we are exploring the help of a bundler. Use npm install create vite
//Instead of the usual straightforward method of just creating files and running on live-server, we are using vite because itimporves debugging, speed and it is modern.

//pnpm is faster than npm...install it
//search pnpm install
//npm install pnpm --location-global

/*DOM represents all page content as objects that can be modified.
The document object is the main entry-point" to the page. DOM has a tree-like structure. 
//look out for CSSOM
*/
//If you run into a permission problem on your windows, click on search bar, search cmd, open your cmd and run as  an adminstrator.

//it is important to learn how to use the terminal


//to set up a project by yourself, you use pnpm install vite instead of npm create-vite that creates the file for you.
/*The steps include:
1.create a folder
2. run pnpm init
3. run pnpm install vite
4. create a file called index.html
5. create a file called main.js
6. and any other file that you need
7. run pnpm dev
*/


//<script  defer type="module" src="/src/index.js"></script>
//The defer attribute helps us to delay the loading of our html. It delays the activity of an attribute called DOMContentLoaded. The defer attribute tells the browser to only execute the script after the document has been parsed.

//Our script tag is written at the end of our html because we want the html to load first before the script. This is because the script is dependent on the html and the script is dependent on the html because it is manipulating the html.

/*Go to your package.json, you can see a 'test', in your terminal, run pnpm run test.You will get the same result as what is currently written in your test
Now add "dev": "vite" to your package.json and run pnpm run dev. You will see your vite server running.*/
//Vite creates a server for us to run our prooject on and it uses index.html as the entry point. It uses index.html as the source of truth i.e the content of the index.html is what we see on the server when it loads.
//Above, are the steps involved in creating a vite project from scratch.


//The idea of bundling in js is that it compiles every aspect of our project into a single file. This is important because it makes our project faster and easier to load. It also makes our project easier to maintain.

/*BOM :Browser Object Model
This represents additional objects provided by the browser(host environment) for working with everything except the document.
There are objects like window, location, navigator, screen, history, etc.
1. The 'navigator' object provides background information about the browser and the operating system.The 2 most important properties are the 'userAgent' and 'platform' properties.
    navigator.userAgent: provides information about the current browser.
    navigator.platform: provides information about the current operating system.

2. The 'location' object provides information about the current URL and can be used to redirect the browser to a new page. It can be used like this:
alert(location.href); //shows currnt URL
if(confirm("Go to Wikipedia?")){
    location.href = "https://wikipedia.org"; //redirects to wikipedia(another page/url)
}

Functions alert/confirm/prompt are also a part of BOM: they are directly not related to the document, but represent pure browser methods of communication with the user.

The Browser Object Model (BOM) is like a set of tools a website uses to talk to your web browser. Imagine the web browser as a program, and the website as a guest. The BOM acts as a middle ground, allowing the website (guest) to ask the browser (program) to do certain things.
Here's a breakdown:
The Website (Guest): This is the code on the webpage you visit, often written in HTML, CSS, and JavaScript.
The Browser (Program): This is the software that displays webpages, like Chrome, Firefox, or Safari.
The BOM (Middle Ground): This provides a way for the website to interact with the browser. It's like a common language they both understand.
Using the BOM, a website can do things like:
Pop up an alert message (think of it like the website getting your attention).
Change the page address (like the website telling the browser to visit a different room).
Find out the size of your screen (like the website measuring the house to adjust its layout).
While the DOM (Document Object Model) focuses on manipulating the content of the webpage itself, the BOM is all about controlling the browser window and its functionalities. They work together to make websites more interactive and user-friendly.
*/

/*CSSOM: CSS Object Model
This describes stylesheets and style rules, manipulates with them and their binding to documents.
CSSOM is used together with DOM when we modify styles of the document. It is rarely used but it is important to know that it exists.

Imagine a web page as a house. The HTML code is like the blueprint, defining the rooms and furniture (headings, paragraphs, images, etc.). The CSS code is like the paint and decorations that make the house look nice.
Now, the Document Object Model (DOM) is like a toolbox that allows you to rearrange the furniture in the house (change the order of elements on the page) using JavaScript.
The CSS Object Model (CSSOM) is a similar toolbox, but for the decorations. It allows you to use JavaScript to change the look of the house without repainting everything. For example, you could make a button turn red when you hover over it, or change the font size of a paragraph.
So, CSSOM is like a tool for web developers to control the styling of a web page using JavaScript, making the page more interactive and dynamic.
*/

/*DOM TREE 
Imagine a web page like a family tree. At the top, you have the whole family (the entire web document). This is the main document object, the root of the tree.
Branching down from the root are the individual family members. These are the HTML elements that make up the page, like headings (<h1>), paragraphs (<p>), images (<img>), buttons (<button>), and so on.
Here's how the DOM tree works:
Parents and Children: Each element can have other elements nested inside it, just like parents have children in a family. For example, a heading (<h1>) element might have a paragraph (<p>) element nested inside it, explaining what the heading is about. In the tree, the heading would be the parent, and the paragraph would be its child.
Siblings: Elements that share the same parent are siblings, just like siblings in a family. For example, if you have two paragraphs (<p>) under the same heading, they would be siblings in the DOM tree.
Levels: The depth of nesting creates levels in the tree. The main document is at level 0 (the root), then its direct children (headings, paragraphs) are at level 1, and so on. The deeper you go, the more specific the elements become.
Think of the web page as a set of instructions for building a structure. The DOM tree is like a visual representation of those instructions, showing how everything fits together.
Here's why the DOM tree is useful:
Understanding the Page: By looking at the DOM tree, developers can see how the page is organized and how elements relate to each other.
Making Changes: Using programming languages like JavaScript, developers can access and manipulate elements in the DOM tree. They can change content, styles, or even add or remove elements entirely. It's like having a map of the family tree, allowing you to find and interact with specific members.
So, the DOM tree is a way to organize and understand the structure of a web page, making it easier for developers to build dynamic and interactive experiences.

The backbone of sn HTML document is its tags. According to the DOM, every html tag is an object. Nested tags are "children" of the enclosing one. The text inside the tags is an object as well. The DOM allows us to modify the document structure, style and content.

document.body is the object representing the <body> tag.
For example, to change the background color of the page to red for 3 seconds, we can use the following code:
document.body.style.background = 'red'; //makes background red
setTimeout(() => document.body.style.background = '', 3000); //returns to previous color after 3 seconds

//We will leanr of other ways to manipulate the DOM soon but first, we need to know about its structure
*/
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page</h1>
        <p>Some text here</p>
    </body>
</html>
//Like we said earlier, the dom represents HTML as a tree structure of tags. Every tree node is an object.
//Tags are element nofrd(or just elements) and they form the tree structure: <html> is at the root, then <head> and <body> are its children, and so on.
//The text inside the tags forms text nodes.

//Spaces at string start/end and space-only text nodes are usually hidden in tools. But they are still there and can be accessed using DOM methods. These spaces usually do not affect how the document is displayed.

//Autocorrection
//If the browser encounters malformed HTML, it automatically corrects it when making the DOM. For example, if we forget to close a tag, the browser will do it for us. This is called "auto-correction". The top tag is always <html>, if we don't add it, the browser adds it for us. i.e it will exist in the DOM, becuase the browser will create it for us.

/*Other types of nodes
There are some other tyoes of nodes besides element and text nodes.
For instance, comments are also nodes. They are created by <!-- and end with -->. They are not shown on the page, but exist in the DOM.
There is a simple rule: If something is in HTML, then it must be in the DOM tree. There are no exceptions. Everything is a node.
There are 12 types of node but in practice we usually only work with 4:
    1. document - the 'entry point' into the DOM
    2. element nodes - HTML tags, the tree building blocks
    3. text nodes - contain text
    4. comment nodes - contain a comment. Sometimes we can put information there, it won't be shown, but JS can read it from the DOM.
*/