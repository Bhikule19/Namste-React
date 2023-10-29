/* <div id="parent">
    <div id="child" >
        <h1>" I am an H1 tag"</h1>
    </div>

</div> */

// Lets build the above html code into react ( Nested Structure in react)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]) //to add more than one children you can do it by using array
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent); // object
