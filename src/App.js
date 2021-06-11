import React from 'react';
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import ShowUsers from "./components/ShowUsers";

import "./css/style.css"

const App = () => {

    return (
        <div className="conatiner">
            <div className="wrap">
                <h1>Users List</h1>
                <ShowUsers />
                <Footer />
            </div>
        </div>
    );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;