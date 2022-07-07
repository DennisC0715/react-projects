import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";
const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sport",
    difficulty: "easy",
  });
  const [error, setError] = useState();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [waiting, setWaiting] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchQuiz = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => {
      console.log(err);
    });

    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setError(false);
        setWaiting(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex - 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCorrect(0);
    setWaiting(true);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuiz(url);
  };
  return (
    <AppContext.Provider
      value={{
        quiz,
        error,
        handleChange,
        handleSubmit,
        nextQuestion,
        checkAnswer,
        index,
        loading,
        closeModal,
        correct,
        waiting,
        showModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobeContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
