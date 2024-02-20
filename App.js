import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1",{id:"heading"},"Namaste React");
const elem = <h1>Element</h1>
const Title = () => (<h1 id="heading">Title {elem}</h1>);
const num = 1000+200;
const HeadingComponent = () => (
    <div id="container">
        {num}
    <Title/>
    {Title()}
     <h1 id="heading">Namaste React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

