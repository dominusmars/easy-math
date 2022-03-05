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
    const submitTest = () => {
        console.log(Test)

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

                console.log(question)
                addQuestion({
                    qO: oQuestion,
                    q: newQuestion,
                    v: varibles,
                    f: formula,
                    a: anwser
                })
                document.getElementById('questionInput').value = '';
                document.getElementById("formulaInput").value = '';
                document.getElementById("answerInput").value = ''

            }}>
                <label htmlFor="question">Question: </label>
                <input type="text" className="question" id="questionInput" required />
                <label htmlFor="answer">Formula: </label>
                <input type="text" className="answer" id="formulaInput" required />
                <label htmlFor="answer">Answer: </label>
                <input type="text" className="answer" id="answerInput" required />
                <input type="submit" />
            </form>
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
            <button onClick={() => {
                submitTest()
            }}>Submit Test</button>

        </div >
    )
}

export default CreateTest
