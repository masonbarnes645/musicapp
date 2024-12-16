import { useEffect, useState } from "react"



function FlashcardForm({ addFlashcard }) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    
    
    const handleSubmitForm = (e) => {
        e.preventDefault()
        const newFlashcard = {question, answer}
        addFlashcard(newFlashcard)
        setQuestion("");
        setAnswer("");    
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label for='question'>Question:</label>
                <input type="text" name="question" required value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <label for='answer'>Answer:</label>
                <input type="text" name="answer" required value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                <button type="submit"> Add Flashcard </button>
            </form>
        </div>
    )
}

export default FlashcardForm