# Countdown to Independence Day

This project displays a countdown from 10 to 1, followed by a "Happy Independence Day!" message. The code is written in JavaScript and follows specific constraints to demonstrate a unique approach to implementing a countdown timer.

## Code Structure

The code is divided into two files: `index.html` and `script.js`.

`index.html`

This file contains the basic HTML structure for the project. It includes:

- A <div> element with an ID of "countdown" to display the countdown.

- A script tag that links to the script.js file.

`script.js`

This file contains the JavaScript code that implements the countdown timer. The code is wrapped in an immediately invoked function expression (IIFE) to encapsulate the logic.

## Countdown Logic

The countdown logic is implemented using a technique called "callback hell." This approach uses nested `setTimeout` functions to create a recursive-like behavior without using named functions, set interval, recursion, IIFEs, or looping.

Here's a breakdown of the logic:

1. The code starts by getting a reference to the `<div>` element with the ID "countdown" using `document.getElementById`.

2. The initial countdown value is set to 10, and the element's text content is updated to display the value.

3. The first `setTimeout` function is called, which decrements the countdown value by 1 and updates the element's text content.

4. The process is repeated for each subsequent second, with each `setTimeout` function calling the next one in the chain.

5. When the countdown reaches 0, the final `setTimeout` function updates the element's text content to display the "Happy Independence Day!" message.

## Constraints

This project adheres to the following constraints:

- No named functions
- No set interval
- No recursion
- No IIFEs (except for the outermost function wrapper)
- No looping