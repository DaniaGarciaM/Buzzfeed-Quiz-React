const QuiestionBlock = ({ question, setChosenAnswerItems }) => {
    const handleClick = () => {
        setChosenAnswerItems((prevState) => [...prevState, question.id])
    }
    return (
        <button className="question-block" onClick={handleClick}>
            <img src={question.image} alt={question.alt} />
            <h3>{question.text}</h3>
            <p className="id_question">
                {question.id}
            </p>
        </button>
    );
}

export default QuiestionBlock;