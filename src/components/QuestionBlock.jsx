const QuestionBlock = ({
    question,
    quizItemId,
    setChosenAnswerItems,
    chosenAnswerItems,
    unansweredQuestionIds,
    setUnansweredQuestionIds
}) => {

    console.log("entro")
    console.log(question)
    console.log(quizItemId)
    console.log(unansweredQuestionIds)
    console.log(chosenAnswerItems)

    const handleClick = () => {
        console.log("Eureka")
        setChosenAnswerItems((prevState) => [...prevState, question.id])
        setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id != quizItemId))
    }

    const validPick = !chosenAnswerItems?.includes(question.id) &&
        !unansweredQuestionIds?.includes(quizItemId)


    return (
        <button
            className="question-block"
            onClick={handleClick}
            disabled={validPick}

        >
            <img src={question.image} alt={question.alt} />
            <h3>{question.text}</h3>
        </button>
    )
}

export default QuestionBlock
