// // var React = require("react");
// // var ReactDOM = require("react-dom");

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<div>
//   <h1>Hello World!</h1>
//   <p>This is a paragraph</p>
//   </div>, document.getElementById("root"));

// // var h1 = document.createElement("h1");
// // h1.innerHTML = "Hello World!";
// // document.getElementById("root").appendChild(h1);

// Create a react app from scracth
// It should display a h1 heading
// It should display an unordered list (bullet points)
// It should contain 3 list elements

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <div>
//     <h1>Hello World!</h1>
//     <ul>
//       <li>This is Gourav Here!</li>
//       <li> I am a learning Ml</li>
//       <li>And also want to be a great person as a leader!!</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(What to Show , where to show it);

// creating javascript inside of html and html inside javascript

// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Gourav";
// let person = prompt("Please Enter One Number: ");
// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your favorite Number is : {person}</p>
//   </div>,
//   document.getElementById("root")
// );
// ReactDOM.render(<p> {name}!</p>, document.getElementById("root"));

// comment -> here I am producing random no. as a favorite no. of the user
// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Gourav";
// const num = 7;
// // let person = prompt("Please Enter One Number: ");
// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     <p>Your favorite Number is : {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "Gourav";
// const lname = "Shaw";
// const num = 7;
// // let person = prompt("Please Enter One Number: ");
// ReactDOM.render(
//   <div>
//     {/* <h1>
//       Hello {fname} {lname}! Hello {fname + " " + lname}!!
//     </h1> */}
//     <h1> Hello {`${fname} ${lname}`}</h1>
//     <p>Your favorite Number is : {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// new task
// Create a react app from scratch
// It should display 2 paragraph HTML elements.
// the paragraphs should say:
// Created by YOURNAME
// copyright CurrentYear
// e.g
// created by Gourav Kumar Shaw
// Copyright 2023

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "Gourav Kumar";
// const lname = "Shaw";

// const today = new Date();
// console.log(today);
// // let person = prompt("Please Enter One Number: ");
// ReactDOM.render(
//   <div>
//     {/* <h1>
//       Hello {fname} {lname}! Hello {fname + " " + lname}!!
//     </h1> */}
//     {/* <h1> Created by {`${fname} ${lname}`}</h1> */}
//     <p>Created by {fname + " " + lname}</p>
//     <p> Copyright {today.getFullYear()} </p>
//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My favorite food
    </h1>

    <div>
      {/* <img src="https://picsum.photos/200" /> */}
      <img alt="random" src={img + "?grayscale"} />
      <br />
      <img
        className="food-img"
        alt="food1"
        src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      />
      <br />
      <img
        className="food-img"
        alt="food2"
        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      />
      <br />
      <img
        className="food-img"
        alt="food3"
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      />
    </div>
  </div>,
  document.getElementById("root")
);
