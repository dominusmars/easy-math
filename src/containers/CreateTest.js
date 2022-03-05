import React from 'react'
import { useState, useEffect } from "react"

function CreateTest() {
    const [Test, setTest] = useState([])

    const deleteQuestion = (index) => {
        var nTest = [...Test]
        nTest.splice(index, 1)
        setTest(nTest)
    }
    const addQuestion = (info) => {
        var nTests = [...Test];
        nTests.push({
            question: info.q,
            formula: info.f,
            anwser: info.a
        })
        console.log(nTests)
        setTest(nTests)
    }
    const submitTest = () => {

    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                var question = document.getElementById('questionInput').value
                var formula = document.getElementById("formulaInput").value
                var anwser = document.getElementById("answerInput").value

                addQuestion({
                    q: question,
                    f: formula,
                    a: anwser
                })

            }}>
                <label htmlFor="question">Question: </label>
                <input type="text" className="question" id="questionInput" />
                <label htmlFor="answer">Formula: </label>
                <input type="text" className="answer" id="formulaInput" />
                <label htmlFor="answer">Answer: </label>
                <input type="text" className="answer" id="answerInput" />
                <input type="submit" />
            </form>
            {Test.map((question, index) => {
                return (
                    <div key={index}>
                        <h1>{question.question}</h1>
                        <p>{question.anwser}</p>
                        <button onClick={(e) => {
                            deleteQuestion(index)
                        }}>Delete</button>
                    </div>
                )
            })}
            <button onClick={() => {

            }}></button>

        </div>
    )
}

export default CreateTest
