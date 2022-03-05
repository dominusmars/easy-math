import React from 'react'
import { useState, useEffect } from "react"

function CreateTest({ createTest }) {
    const [Test, setTest] = useState([])

    const deleteQuestion = (index) => {
        var nTest = [...Test]
        nTest.splice(index, 1)
        setTest(nTest)
    }

    const addQuestion = (info) => {
        var nTests = [...Test];
        nTests.push({
            oquestion: info.qO,
            question: info.q,
            formula: info.f,
            varibles: info.v,
            anwser: info.a
        })
        console.log(nTests)
        setTest(nTests)
    }
    const submitTest = (name) => {
        if (Test.length < 5) {
            alert("Test must have more then 5 question")
            return;
        }
        var test = {};
        test.taskName = name
        test.test = Test
        window.data.tests.push(test)
        console.log(window.data)
        setTest([])
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                var question = document.getElementById('questionInput').value
                var formula = document.getElementById("formulaInput").value
                var anwser = document.getElementById("answerInput").value

                var regex = /(\w+(?==))/gm
                var varibles = question.match(regex)

                var oQuestion = question

                var matchRegex = /\w+=/gm
                var newQuestion = question.replace(matchRegex, "")

                addQuestion({
                    qO: oQuestion,
                    q: newQuestion,
                    v: varibles,
                    f: formula,
                    a: anwser
                })
                document.getElementById('questionInput').value = '';
                document.getElementById("formulaInput").value = '';
                document.getElementById("answerInput").value = '';

            }}>

                <label htmlFor="questionInput">Question: </label>
                <input type="text" className="questionInput" id="questionInput" required />
                <label htmlFor="formulaInput">Formula: </label>
                <input type="text" className="formulaInput" id="formulaInput" required />
                <label htmlFor="answerInput">Answer: </label>
                <input type="text" className="answerInput" id="answerInput" required />
                <input type="submit" />
            </form>
            <form onSubmit={(e) => {
                e.preventDefault()
                var name = document.getElementById('nameInput').value
                submitTest(name)
                document.getElementById('nameInput').value = '';
            }}>
                <label htmlFor="nameInput">Name of Test: </label>
                <input type="text" className="nameInput" id="nameInput" required />
                <input type="submit" value="Submit Test" />
                {
                    Test.map((question, index) => {
                        return (
                            <div key={index}>
                                <h6>{question.question}</h6>
                                <p>{question.anwser}</p>
                                <button onClick={(e) => {
                                    deleteQuestion(index)
                                }}>Delete</button>
                            </div>
                        )
                    })
                }


            </form>


        </div >
    )
}

export default CreateTest
