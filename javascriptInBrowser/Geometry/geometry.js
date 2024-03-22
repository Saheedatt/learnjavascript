//offsetParent, offsetLeft/Top: These properties are rarely needed, but still, they are the "most outer" geometry properties. It is the nearest ancestor that the browser uses for calculating cordinates during rendering.The nearest ancestor is one of the following:
//1. CSS-position(position is absolute, relative, fixed or sticky)
//2. <td>,<th>, or <table>, or
//3. <body>
//Properties offsetLeft/offsetTop provide the x/y cordinates relative to offsetParent upper-left corner. check html

// offsetParent: This property identifies the nearest ancestor element that has a CSS positioning (like absolute, relative, fixed, or sticky).
// offsetLeft/Top: They give the coordinates of an element relative to its offsetParent, which is its nearest positioned ancestor. For instance, if you have an element within a div that's 20 pixels from the left edge of the div, offsetLeft will be 20.

//uncomment to test
// alert(example.offsetParent.id); //main
// alert(example.offsetLeft); //180
// alert(example.offsetTop); //180

//There are 3 major things that have size and scrolling capabilities: element, windows, document
//offsetWidth/Height: The simplest ones.They provide the "outer" width/height  of the element i.e its full size including borders
//offsetWidth = 390- the outer innerWidth, can be calculated as inner CSS-innerWidth(300px) plus paddigs(2* 20px) and borders (2*25px)
//offsetHeight = 290 - the outer height
//They include the element's inner content width/height, padding, and borders. Essentially, it's the full size of the element as it appears on the page.

//Geometry properties are zero/null for elements that are not displayed.If an element(or any of its ancestors) has display: none or is not in the document, then all the geometry properties are 0 but null for offsetParent.

//clientTop/Left:Inside the element, we have borders.To measure them, there are properties clientTop and clientLeft.
//It becomes visible when the document is right-to-left(arabic/hebrew language). The scrollbar is then not on the right, but on the left, and then clientLeft also includes the scrollbar width.
//In that case clientLeft will be = value + scrollbar width

//clientWidth/Height: These properties provide the size of the area inside the element borders. They include the content width together with paddings, but without the scrollbar. They provide the size of the visible content area of the element, excluding borders and scrollbars. If there are no paddings, then clientWidth/Height is exactly the content area, inside the borders and the scrollbar(if any).So when there is no padding, we can use clientWidth/clientHeight to get the content area size.

//scrollWidth/Height: They are like clientWidth/clientHeight, but they also unclude the scrolled out(hidden) parts. We can use these properties to expand the element wide to its full width/height. Like this:
element.style.height = `${element.scrollHeight}px`;

//scrollLeft/scrollTop: They are the width and height of the hidden, scrolled out part of the element. In other words, scrollTop is "how much is scrolled up". These properties indicate how much an element is currently scrolled from its top or left edges.
// Of all these listed properties only scrollTop and scrollLeft can be used to scroll, others are read-only.
// NB - Conditions for scrolling is there must be an overflow and height. Element must have content that overflows.
element.style.height = `${element.scrollHeight}px
  $('div').onclick = function() {
    this.scrollTop += 10
  }

  let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;`

// Use JavaScript to move an element to the middle/center of the page(this can be another element).
//To center an element within its container or the page, you can calculate its position based on the container's dimensions and the element's size. For instance, to center an element horizontally, you'd set its left position to half of the container's width minus half of the element's width.
element.style.left = Math.round(page.clientWidth / 2) + 'px';
element.style.top = Math.round(page.clientHeight / 2) + 'px';
//page.clientWidth and page.clientHeight represent the width and height of the viewport, which is the visible area of the browser window.

//factor the element width and height
element.style.left = Math.round(page.clientWidth / 2 - element.offsetWidth / 2) + 'px';
element.style.top = Math.round(page.clientHeight / 2 - element.offsetHeight / 2) + 'px';
//element.offsetWidth and element.offsetHeight represent the width and height of the element including padding, border, and scrollbar (if present).

// The difference between CSS width and clientWidth: clientWidth gives you the numeric width of the content area including paddings, while getComputedStyle().width gives you the CSS-defined width as a string (which may include "auto" for inline elements).
//The difference arises mainly due to paddings and potential scrollbar space reserved by the browser. minus half of the element's width.
// 1.clientWidth is numeric, while getComputedStyle(elem).width returns a string with px at the end.
// 2.getComputedStyle may return non-numeric width like "auto" for an inline element.
// 3.clientWidth is the inner content area of the element plus paddings, while CSS width (with standard box-sizing) is the inner content area without paddings.
// 4.If there’s a scrollbar and the browser reserves the space for it, some browser subtract that space from CSS width (cause it’s not available for content any more), and some do not. The clientWidth property is always the same: scrollbar size is subtracted if reserved.



// Window sizes and scrolling
//How do we find the width and height of the browser window? How do we get the full width and height of the document, including the scrolled out part? How do we scroll the page using JavaScript? For most, we can use this method: document.documentElement but there are other methods to consider.
//1.Width/Height of the whole window: To get the window width and height we can use clientWidth/clientHeight of document.documentElement:
document.documentElement.clientWidth/clientHeight


//2. Width/height of the document: Theoretically, as the root document element is document.documentElement, and it encloses all the content, we could measure document full size as document.documentElement.scrollWidth/scrollHeight.
//If there is no scroll, then documentElement.scrollHeight may be even less than documentElement.scrollHeight may be even less than documentElement.clientHeight
//To reliable obtain the full document height, we should take the maximum of these properties:
//i.e to get window width and height we can use clientWidth/clientHeight of document.documentElementwith the scrolled out view = Math.max( document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight, )

//Get the current scroll: DOM elements have their current scroll state in elem.scrollLeft/scrollTop.
//For document scroll document.documentElement.scrollleft/Top works in most browsers,except older ones like safari where you should use document.body instead of document.documentElement. Luckily we don't have to remember all these peculiarites because scroll is available in the special properties window.pageXOffset/pageYOffset
// window.scrollTo(pageX, pageY) - absolute coordinate of the window
// window.scrollBy(x, y) - scroll relative to the current place/position
// elem.scrollIntoView(top) - scroll to make elem visible either aligning to top/bottom of the window
// They all support smooth scrolling
// window.scrollBy({ behavior: "smooth", left: 0, top: 20 });
// window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
// element.scrollIntoView({ behavior: "smooth", block: "center" });

// NB - Current scroll details of an element can be gotten with its scrollTop or scrollLeft, for a page use the window.pageYOffset/pageXOffset or window.scrollX/scrollY

// Stop a page from scrolling using JavaScript:
// document.body.style.overflow = 'hidden'
// // to restore scrolling
// document.body.style.overflow = ''

// Coordinates Relative to window (similar to position fixed) - clientX/clientY Relative to document (similar to position absolute) - PageX/pageY

// Coordinate System: To move elements around, we should be familiar with cordinates. Most JavaScript methods deal with one of two cordinate systems:
//Element coordinates: getBoundingClientRect:
//It returns window coordinates for a minimal rectangle that encloses elem as an object of built-in DOMRect class.
// elem.getBoundingClientRect() - x/y width/height and top/bottom and left/right

const rect = element.getBoundingClientRect();

/*The getBoundingClientRect() method returns a DOMRect object, which contains the following properties:
1. x: The X-coordinate of the top-left corner of the rectangle, relative to the viewport.
2. y: The Y-coordinate of the top-left corner of the rectangle, relative to the viewport.
3. width: The width of the rectangle (including padding and border) in pixels.
4. height: The height of the rectangle (including padding and border) in pixels.
5. top: The distance from the top edge of the viewport to the top edge of the rectangle.
right: The distance from the left edge of the viewport to the right edge of the rectangle.
6.bottom: The distance from the top edge of the viewport to the bottom edge of the rectangle.
7.left: The distance from the left edge of the viewport to the left edge of the rectangle.

The getBoundingClientRect() method calculates the position and dimensions of an element relative to the viewport (the visible portion of the browser window).
It takes into account any CSS transforms applied to the element, such as rotations or scale transformations.
The returned DOMRect object provides precise measurements, including the element's size (width and height) as well as its position relative to the viewport.*/

// getBoundingClientRect_image

// left = x and top = y

// right -> left + width

// bottom -> top + height

// document.elementFromPoint(x, y)

// NB - Relative to the window – elem.getBoundingClientRect(). Relative to the document – elem.getBoundingClientRect() plus the current page scroll(window.pageYOffset/pageXOffset).



// functions/method manipulate scroll programmatically using javascript
// Scroll to a specific position on the page
function scrollToPosition(position) {
    window.scrollTo({
        top: position,
        behavior: 'smooth' // You can use 'auto' for instant scrolling
    });
}

// Scroll to a specific element on the page
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // You can use 'end' or 'center' to adjust the alignment
        });
    }
}

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to the bottom of the page
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
// Scroll to position 500 pixels from the top
scrollToPosition(500);

// Scroll to the element with ID "myElement"
scrollToElement('myElement');

// Scroll to the top of the page
scrollToTop();

// Scroll to the bottom of the page
scrollToBottom();
