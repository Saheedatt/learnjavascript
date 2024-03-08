// console.log('Hello from index.js')
//to change the content of our current html:
// document.body.innerHTML = "<h1> Hello from index.js</h1>"

/*document.body.innerHTML = `<h1> Hello, <span> 
Saheedat! 
</span> 
</h1>
`;*/
//the difference between innerHtml and textContent is that innerHtml returns the html content of an element while textContent returns the text content of an element.

//the alternative approach to adding our css now is to import it
import './style.css';

//now, JS is controlling css
//this shows that our css can be bundled.

const element = document.querySelector('h1')

if(!element){
    alert("No h1 element found")
}

element.textContent = "I was updated with Javascript"

