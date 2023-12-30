import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../../../redux/actions";

const SelectFields = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;

      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;

      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <form>
        <label>{label}</label>
        <select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SelectFields;
