// QuestionDetailPage.js
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './QuestionDetailPage.css';

const QuestionDetailPage = () => {
  const { questionId, title, question } = useParams();

  // Decode the encoded URI components
  const decodedTitle = decodeURIComponent(title);
  const decodedQuestion = decodeURIComponent(question);

  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() !== '') {
      setAnswers([...answers, answer]);
      setAnswer('');
    }
  };

  return (
    <div className="question-detail-page">
      <div className="question-detail-container">
        <h1 className="question-title">{decodedTitle}</h1>
        <p className="question-content">{decodedQuestion}</p>
      </div>

      <div className="answers-container">
        {answers.map((answer, index) => (
          <div key={index} className="answer-item">
            <p>{answer}</p>
          </div>
        ))}
      </div>

      <form className="question-answer-form" onSubmit={handleSubmit}>
        <textarea
          className="question-answer-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          required
        />
        <button className="question-answer-submit-button" type="submit">
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuestionDetailPage;

