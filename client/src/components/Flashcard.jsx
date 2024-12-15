import { Paper } from "@mui/material"
import '../App.css'
import { useState } from "react"
function Flashcard() {
    const [isFlipped, setFlipped] = useState(false)

    const handleFlip = () =>{
        setFlipped(!isFlipped)
    }

    return (
        <div className="card-container" onClick={handleFlip}>
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                <Paper className="card-front">
                    <h2>front</h2>
                </Paper>
                <Paper className="card-back">
                    <h2>back</h2>
                </Paper>

            </div>
        </div>
    )
}

export default Flashcard