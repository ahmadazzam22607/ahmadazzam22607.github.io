// JavaScript code to manipulate the DOM and add interactivity

// Example: Changing the header text when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header h1");
  header.textContent = "Welcome to My Interactive Website";
});

// Example: Adding a click event listener to a button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#click-me-button");
  button.addEventListener("click", function () {
    alert("You clicked the button!");
  });
});
