/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(givenTime) {
  let hourTime = givenTime.split(":")
  if (parseInt(hourTime[0]) < 12) {
    return "Good Morning"
  } else if (parseInt(hourTime[0]) < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(arg) {
  document.getElementById("greeting").innerText = arg; 
}