import { forwardRef, useEffect, useState } from "react";

const AnswerBlock = ({ answerOptions, chosenAnswers }, ref) => {
    const [result, setResult] = useState(null)
    console.log("dania")
    console.log(answerOptions)
    console.log(answerOptions[0].combination)
    console.log(chosenAnswers)
    // useEffect(() => {
    //     answerOptions.forEach(answer => {
    //         if (chosenAnswers.includes(answer.combination[0]) &&
    //             chosenAnswers.includes(answer.combination[1]) &&
    //             chosenAnswers.includes(answer.combination[2]) &&
    //             chosenAnswers.includes(answer.combination[3]) &&
    //             chosenAnswers.includes(answer.combination[4]) 
    //         ) {
    //             setResult(answer)
    //         } else if (!result) {
    //             setResult(answerOptions[0])
    //         }
    //     })
    // }, [result])
    useEffect(() => {
        answerOptions.forEach(answer => {
            if (
                answer.combination && 
                chosenAnswers.includes(answer.combination[0]) &&
                chosenAnswers.includes(answer.combination[1]) &&
                chosenAnswers.includes(answer.combination[2]) &&
                chosenAnswers.includes(answer.combination[3]) &&
                chosenAnswers.includes(answer.combination[4])
            ) {
                setResult(answer);
                return; // Salir del bucle forEach una vez que se ha encontrado un resultado
            }
        });
    }, [answerOptions, chosenAnswers]);
    console.log(result)
    return (
        <div ref={ref} className="answer-block">
            <h2>{result?.text}</h2>
            <img src={result?.image} alt={result?.alt} />
        </div>
    );
}

export default forwardRef(AnswerBlock);