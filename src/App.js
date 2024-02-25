import { useState, useEffect } from "react";
import Title from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
  const [quiz, setQuiz] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch('https://api-buzz-feed-quiz.vercel.app/quiz');
      const json = await response.json();
      console.log(json);
      setQuiz(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(quiz)

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz && quiz?.content.map(contentItem => (
        <QuestionsBlock
          key={contentItem.id}
          quizItem={contentItem} />
      ))}
    </div>
  );
}

export default App;
