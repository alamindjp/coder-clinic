import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../../../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return (
    <div>
      <form className="text-black">
        <h6 className="font-semibold mb-1">Select Amount :</h6>
        <input className="text-center font-bold"
          onChange={handleChange}
          type="number" min="0" required
        />
      </form>
    </div>
  );
};

export default TextFieldComp;
