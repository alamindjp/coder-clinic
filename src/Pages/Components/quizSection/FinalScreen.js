import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../../redux/actions";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/settings");
  };
  return (
    <div className=" bg-blue-200 w-1/2 mx-auto py-10 mb-8 rounded-xl shadow-lg text-center">
      <h1 className="p-3 text-4xl font-bold">Final Score : <span className="text-green-600">{score}</span></h1>
      <button className="btn-big w-[180px] my-8 mx-auto" onClick={handleBackToSettings}>Go Back</button>
    </div>
  );
};

export default FinalScreen;
