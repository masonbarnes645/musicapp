import { Paper } from "@mui/material"
import '../../App.css'
import { useState } from "react"
function Flashcard({ question, answer}) {
    const [isFlipped, setFlipped] = useState(false)

    const handleFlip = () =>{
        setFlipped(!isFlipped)
    }

    return (
        <div className="card-container" onClick={handleFlip}>
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                <Paper className="card-front">
                    <h2>{question}</h2>
                </Paper>
                <Paper className="card-back">
                    <h2>{answer}</h2>
                </Paper>

            </div>
        </div>
    )
}

export default Flashcard