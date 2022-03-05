import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


function Tests(props) {
    const [tests, settests] = useState([]);

    useEffect(() => {
        settests(getTests())
    }, [tests, props.student])

    return (
        <div className="Tests">
            <h1>{props.student}</h1>
            <div>
                {tests.map((test) => <Test name={test}></Test>)}
            </div>
            <h3>Previous Tests</h3>

            <div>
                <Test></Test>
                <Test></Test>
            </div>
        </div>
    )
}


function Test(props) {
    return (
        <button className="Test">
            {props.name}
        </button>
    )
}


function getTests() {
    return window.data.tests;
}

export default Tests;