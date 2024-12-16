import { useEffect, useState } from "react"


function FlashcardForm() {
    const [flashcards, setFlashcards] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    
    
    useEffect(() => {
            const storedFlashcards = localStorage.getItem('flashcards')
            if (storedFlashcards){
                setFlashcards(JSON.parse(storedFlashcards))
            }
    }, [])
    
    useEffect(() => {
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
      }, [flashcards]);
    
    const handleSubmitForm = (e) => {
        e.preventDefault()
        const newFlashcard = {question, answer}
        setFlashcards((prev) => [...prev, newFlashcard])
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