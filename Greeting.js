
/*
Create a react app from scracth 
// show a single h1 that says "Good Morning " if between midnight and 12PM.
// or " Good Afternoon" if between 12PM and 6PM.
// or " Good evening" if between 6PM and midnight.
// Apply the " heading" style in the styles in the styles.css
// Dynamically change the color fo the h1 using inline css styles. 
// Morning= red, Afternood= green, Night = blue.

*/

import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2022, 1, 1, 20);
const currentTime = date.getHours();

console.log(currentTime);

let greeting;
if (currentTime >= 0 && currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime >= 12 && currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good night";
}
let color = "";

if (currentTime >= 0 && currentTime < 12) {
  color = "red";
} else if (currentTime >= 12 && currentTime < 18) {
  color = "green";
} else {
  color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={{ color: color }}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
