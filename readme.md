1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
---
##  Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

### `getElementById(id)`

- Selects one element by its unique id.
- Returns a single Element or null.
- Fast and direct lookup.

### `getElementsByClassName(className)`

- Selects all elements with a given class.
- Returns a live HTMLCollection.
- Access values by indexing method (e.g. elements[0]).

### `querySelector(selector)`

- Selects the first match using any CSS selector.
- Returns a single Element or null.
- Supports complex selectors (.class, #id,tag[attr]).

### `querySelectorAll(selector)`

- Selects all matches using any CSS selector.
- Returns a static NodeList.

---

2. How do you create and insert a new element into the DOM?

##  Steps to Create and Insert a New Element into the DOM

1. **Create the element**  
   Use document.createElement(tagName) to make a new element in memory.

2. **Set content or attributes**  
   Add text, HTML, classes, IDs, or other attributes (like .textContent, .className, .setAttribute()).

3. **Insert into the DOM**  
   Append, prepend, or insert before a reference node using methods like .appendChild(), .prepend(), or .insertBefore().

4. **Optional Styling or modification**  
   Adjust styles with .style or class list changes using .classList.
---

3. What is Event Bubbling and how does it work?

**Event Bubbling:**  
Event bubbling means when an event happens on the deepest element when an user clicks, it also triggers on its parent elements, moving upward through the page’s structure.

**Event Bubbling Working Process:**  
1. An event (e.g., click) is triggered on the innermost element.  
2. The event handler for that element executes (if present).  
3. The event then moves up to its parent element, then to the grandparent, and continues up to the document root, triggering any matching event handlers along the way.  

---

4. What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation:**
Event delegation is a technique where an user attaches a single event listener to a parent element and use it to handle events from its child elements, by taking advantage of event bubbling.

**Event Delegation Working Process:**
1. Add the listener to a parent  element.
2. When an event on a child element bubbles up, the parent’s listener catches it.
3. Inside the handler, check event.target or use .matches() to see which child triggered it.

**Event Delegation Benefits:**

1. **Fewer listeners :** Better performance, especially with many child elements.
2. **Handles dynamic content :** Works for elements added after the listener is attached.
3. **Cleaner code :** One listener instead of many.

---

5. What is the difference between preventDefault() and stopPropagation() methods?

##  Difference between preventDefault() and stopPropagation() method

### `preventDefault()`

Stops the browser’s default behavior for an event.

### `stopPropagation()`

Stops the event from bubbling up to parent elements.
