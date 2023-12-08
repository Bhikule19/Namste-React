import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  <h2>Hello I am under the water</h2>;
};

//React Funcyional component
const HeadingComponent = () => {
  <div id="container">
    <h1>Namamste React in Functional component</h1>
    <Title />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
