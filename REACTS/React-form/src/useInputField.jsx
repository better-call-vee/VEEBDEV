// this is a custom hook
import { useState } from "react";
import React from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleFieldOnChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, handleFieldOnChange];
};
export default useInputField;

// Custom Hook