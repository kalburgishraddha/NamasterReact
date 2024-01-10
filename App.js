/*
    <div id="parent">
        <div id="child">
            <h1> This is h1 child </h1>
        </div>
    </div>

*/
const parent = React.createElement("div", 
    { id: "parent" },[
        React.createElement("div", { id: "children1" }, [
            React.createElement("h1", { id: "heading" }, "I am h1"),
            React.createElement("h1", { id: "heading" }, "I am h2")
        ]),
        React.createElement("div", { id: "children2" }, [
            React.createElement("h1", { id: "heading" }, "I am h1"),
            React.createElement("h1", { id: "heading" }, "I am h2")
        ])
    ]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
const heading = React.createElement("h1", {id:"heading"}, "Hello from React");
console.log("h", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

