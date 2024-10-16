import React, { useState } from 'react';
import './QuestionOverviewPage.css';
import { useParams, Link } from 'react-router-dom';
import Like from '../Components/assets/Button/Like.png';



const QuestionOverviewPage = () => {
    const [question, setQuestion] = useState('');
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const { project, department } = useParams();
    console.log(project, department);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && question) {
            const newQuestion = {
                id: Date.now(), // Generate a unique id
                title,
                question,
                likes: 0,
                isLiked: false,
                createdAt: new Date().toLocaleString()
            };
            setQuestions([...questions, newQuestion]);
            setTitle('');
            setQuestion('');
            setError('');
        } else {
            setError('Please enter a question and title');
        }
    }

    const handleDelete = (id) => {
        setQuestions(questions.filter(question => question.id !== id));
    }

    const handleLike = (id) => {
        setQuestions(previousQuestions => 
            previousQuestions.map(question => {
                if (question.id === id) {
                    return {
                        ...question,
                        likes: question.isLiked ? question.likes - 1 : question.likes + 1,
                        isLiked: !question.isLiked
                    };
                }
                return question;
            })
        );
    }

    return (
        <div>
            <h1 className="question-overview-title">{project}</h1>
            <h2 className="question-overview-department">{department}</h2>
            <form className="form-question" onSubmit={handleSubmit}>
                <input 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} 
                    required  
                    type="text" 
                    placeholder='Enter question title' 
                    className='input-question-title'
                />
                <textarea 
                    required 
                    value={question} 
                    onChange={(event) => setQuestion(event.target.value)} 
                    placeholder="Ask a question..." 
                    className="textarea-question"
                ></textarea>
                <button type="submit">Ask Question</button>
            </form>
            <div className="question-overview-container">
                {questions.map((question) => (
                    <div key={question.id} className='Question-Card-Container'>
                        <div className="question-overview-item">
                            <div className='Question-Title-delete-Button-Container'>
                                <h3>{question.title}</h3>
                               
                                <button className='Delete-Button' onClick={(event) => {
                                    event.preventDefault();
                                    handleDelete(question.id);
                                }}>X</button>
                            </div>
                            <div className='Question-Likes-Container'>
                                <p>{question.createdAt}</p>
                                <div className='Question-Likes-Button-Container'>
                                    <button className='Like-Button' onClick={(event) => {
                                        event.preventDefault();
                                        handleLike(question.id);
                                    }}><img className='Like-Button' src={Like} alt="Like" /></button>
                                    <p>{question.likes}</p>
                                </div>
                            </div>
                        </div>
                        <Link
              to={`/question-detail/${question.id}/${encodeURIComponent(
                question.title
              )}/${encodeURIComponent(question.question)}`}
            >
              View Details
            </Link>
            
                    </div>
                ))}
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default QuestionOverviewPage;


     

