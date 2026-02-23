1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:The difference of between getElementById, getElementByClassName, and querySelector / querySelectorAll getElementById use for To find an HTML element by its id. getElementByClassName uses toTo find an HTML element by class.And querySelector use for the first matching element using a CSS selector.querySelectorAll use Returns all matched elements using a CSS selector.

2. How do you create and insert a new element into the DOM?
Ans:In JavaScript, typically used document.createElement() to create the new element and then methods like appendChild(), append(), prepend(), or insertBefore() to insert it into an existing parent element. 

3. What is Event Bubbling? And how does it work?
Ans:Event bubbling is a default JavaScript system where an event triggered on a child element propagates upward through its ancestors in the DOM tree, triggering handlers from the target element up to the root. It acts like a bubble rising in water, allowing parents to manage child events.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation is a JavaScript technique where you attach a single event listener to a parent element to manage events for all of its descendant elements, rather than adding separate listeners to each child individually. 

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:The difference between preventDefault() and stopPropagation() methods preventDefault() use toTo turn off the default behavior of an event.And stopPropagation()Stop events from being propagated to parent or nested elements.
