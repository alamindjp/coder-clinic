import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../../../redux/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  console.log(options);
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <div>
        <h1 className="text-center text-orange-600 font-bold my-4">Loading...</h1>
      </div>
    );
  }
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };
  return (
    <div className="bg-blue-200 my-8 p-10 w-1/2 mx-auto rounded-lg shadow-lg">
      <h4 className="text-3xl font-bold text-center my-3">Question : <span className="text-red-600">{questionIndex + 1}</span></h4>
      <div className="bg-white p-6 shadow-md">
        <p className="font-semibold mb-3" mt={5}>{decode(response.results[questionIndex].question)}</p>
        {options.map((data, id) => (
          <div key={id}>
            <button className="font-bold" onClick={handleClickAnswer}>{decode(data)}</button>
          </div>
        ))}
      </div>
      <p className="text-center text-2xl font-semibold py-2">
        Score : <span className="text-green-700 font-bold">{score}/{response.results.length}</span>
      </p>
    </div>
  );
};

export default Questions;
