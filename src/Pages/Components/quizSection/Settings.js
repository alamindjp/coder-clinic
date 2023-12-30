import React from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import SelectFields from "./SelectFields";
import TextFieldComp from "./TextFieldComp";

const Settings = () => {
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <div>
        <h1 className="text-center text-orange-600 font-bold my-4">Loading...</h1>
      </div>
    );
  }
  if (error) {
    return <h2>Something went wrong</h2>;
  }
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <div>
      <h2 className="text-center text-4xl m-6">Test Your Skills</h2>
      <form className="bg-blue-200 w-1/2 mx-auto p-12 mb-10 rounded-xl shadow-xl " onSubmit={handleSubmit}>
        <p className="bg-white shadow-md py-2 pl-4 font-semibold mt-4">
          <SelectFields options={response.trivia_categories} label="Select Category :" />
        </p>
        <p className="bg-white shadow-md py-2 pl-4 font-semibold mt-4">
          <SelectFields className="bg-gray-400" options={difficultyOptions} label="Select Difficulty :" />
        </p>
        <p className="bg-white shadow-md py-2 pl-4 font-semibold mt-4">
          <SelectFields className="bg-gray-400" options={typeOptions} label="Select Type :" />
        </p>
        <p className="mt-3">

        <TextFieldComp/>
        </p>
        <div>
          <button className="btn-big w-[180px] mt-5 mx-auto" type="submit">Get Started</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
