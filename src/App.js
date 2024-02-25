import { useState, useEffect } from "react";
import Title from "./components/Title";

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
    <div>
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
    </div>
  );
}

export default App;
