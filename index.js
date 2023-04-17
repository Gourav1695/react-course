// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<div>
  <h1>Hello World!</h1>
  <p>This is a paragraph</p>
  </div>, document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);

// challenge :
// Create a react app from scracth
// It should display a h1 heading
// It should display an unordered list (bullet points)
// It should contain 3 list elements

import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li>This is Gourav Here!</li>
      <li> I am a learning Ml</li>
      <li>And also want to be a great person as a leader!!</li>
    </ul>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(What to Show , where to show it);

// creating javascript inside of html and html inside javascript

import React from "react";
import ReactDOM from "react-dom";

const name = "Gourav";
let person = prompt("Please Enter One Number: ");
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your favorite Number is : {person}</p>
  </div>,
  document.getElementById("root")
);
ReactDOM.render(<p> {name}!</p>, document.getElementById("root"));

// comment -> here I am producing random no. as a favorite no. of the user
import React from "react";
import ReactDOM from "react-dom";

const name = "Gourav";
const num = 7;
// let person = prompt("Please Enter One Number: ");
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your favorite Number is : {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

const fname = "Gourav";
const lname = "Shaw";
const num = 7;
// let person = prompt("Please Enter One Number: ");
ReactDOM.render(
  <div>
    {/* <h1>
      Hello {fname} {lname}! Hello {fname + " " + lname}!!
    </h1> */}
    <h1> Hello {`${fname} ${lname}`}</h1>
    <p>Your favorite Number is : {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
