import { useEffect, useState } from "react"
import Flashcard from "./Flashcard"
import FlashcardForm from "./FlashcardForm"

function FlashContainer() {
    const [flashcards, setFlashcards] = useState([])


    useEffect(() => {
        const storedFlashcards = localStorage.getItem('flashcards')
        if (storedFlashcards) {
            setFlashcards(JSON.parse(storedFlashcards))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
    }, [flashcards]);
    
    
    const addFlashcard = (card) => {
        setFlashcards((prev) => [...prev, card])

    }

    return (
        <div>
            {flashcards.map(({ question, answer }) => (
                <Flashcard question={question} answer={answer} />
            ))}
            <FlashcardForm addFlashcard={addFlashcard} />
        </div>
    )
}

export default FlashContainer

// minimize / choose list / new flashcard / new list 