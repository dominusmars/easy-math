import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


function Tests(props) {
    const [tests, settests] = useState(window.data.tests);

    useEffect(() => {
        settests(window.data.tests)
    } , [window.data.tests, settests])

    return (
        <div className="Tests">
            <h1>{props.student}</h1>
            <div>
                {tests.map((test, id) => <Test name={test.testName} key={id}></Test>)}
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