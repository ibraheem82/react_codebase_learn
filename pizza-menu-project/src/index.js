import React from "react";
import ReactDom from "react-dom/client";
// import ReactDom from "react-dom"; // ! before react 18


function APP(){
    return <h1>Hello Good Morning</h1>;
}


// If you're using React 18 or later (recommended):
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><APP/></React.StrictMode> );



// If you're using React 17 or earlier (not recommended for new projects):
// * Before React 18 
// React.render(<APP />)
// ReactDOM.render(<APP />, document.getElementById("root")); // Correct syntax for React 17 and earlier


