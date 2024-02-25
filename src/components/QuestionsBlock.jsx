import QuestionBlock from './QuestionBlock';
const QuestionsBlock = ({ quizItem }) => {
    return (
        <>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem.questions.map(question => (
                    <QuestionBlock key={question.id} question={question}/>
                ))}
            </div>
        </>
    );
}

export default QuestionsBlock;