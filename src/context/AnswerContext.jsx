// AnswerContext.jsx

import { useState, createContext } from 'react';

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const handleChange = () => {
    setIsAnswered((prev) => !prev);
  };

  return (
    <AnswerContext.Provider value={{ isAnswered, handleChange }}>
      {children}
    </AnswerContext.Provider>
  );
};
