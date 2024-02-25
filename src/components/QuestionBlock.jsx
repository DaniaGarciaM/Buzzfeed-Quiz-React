const QuiestionBlock = ({ question }) => {
    console.log({ question })
    return (
        <button className="question-block">
            <img src={question.image} alt={question.alt} />
            <h3>{question.text}</h3>
            <p className="id">
                {question.id}
            </p>
        </button>
    );
}

export default QuiestionBlock;