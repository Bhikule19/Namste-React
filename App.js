/* <div id="parent">
    <div id="child" >
        <h1>" I am an H1 tag"</h1>
    </div>

</div> */

// Lets build the above html code into react ( Nested Structure in react)

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag"),
//   ]) //to add more than one children you can do it by using array
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Hi I am H1 tag child1"),
      React.createElement("h2", {}, "Hi I am H2 tag child1"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am H1 tag child2"),
    React.createElement("h2", {}, "Hi I am H2 tag child2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent); // object
