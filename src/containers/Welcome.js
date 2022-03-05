import React from 'react'
import img from "../asserts/Icon.png"

function Welcome() {
    return (
        <div style={{ margin: "auto", maxWidth: "700px" }}>
            <div style={{ textAlign: "center", display: "" }}>
                <h1 style={{ textAlign: "center", display: "", marginRight: "10px" }}>
                    Welcome To EasyMath
                </h1>
                <img src={img} alt="" style={{ width: "200px", borderRadius: "15%" }} />
            </div>
            <p>
                This is our new and improved EasyMath Api Software.
                Have you ever thought MatLab was easy? No? Well even the creators don't think so.
                Our new software improves on the idea of Math tests. And improves the logic of Math itself.
                Creating innovatate ways to create math pre tests. Math tests are hard, whens the last time
                you forgot how to muitlple basic numbers, Excatly. We make it simple. Taking pre tests helps
                you learn and understand what your being tested on. Professors are lazy, always not posting study guides.
                Expecting you to google basically everything. Making wondering why you went to college anyway.
                But our tool removed the laziness from the equation. Professors now have the tools to make, refined
                tests and pre test for their students needs.
            </p>

        </div >
    )
}

export default Welcome