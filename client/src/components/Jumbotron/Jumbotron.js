import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-5 text-center heroText">Welcome to LookBook</h1>
                <h2 className="display-6 text-center heroText" style={{fontWeight: "400"}}>A React App for finding and saving your favorite books</h2>
            </div>
        </div>
    )
}

export default Jumbotron;