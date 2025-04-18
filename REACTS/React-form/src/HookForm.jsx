import React from "react";
import useInputField from "./useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  //that custom hook, this will reduce the duplicate work(for email, for password or any other type we would have needed to write function for each of them everytime)
  const [email, emailOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={nameOnChange} defaultValue={name} />
        <br />
        <input type="email" onChange={emailOnChange} defaultValue={email} />
        <br />
        <input type="submit" value="Submit now" />
      </form>
    </div>
  );
};

export default HookForm;
