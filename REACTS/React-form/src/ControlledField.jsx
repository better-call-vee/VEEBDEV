import React from "react";
import { useState } from "react";
// by this, we can control and check the password while even taking each letter input. needed for checking password requirements or any requirement. dynamic error handling.
const ControlledField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    console.log(e.target.value); //we targetting specific box only, tracking dynamic change. thus, not using e.target.password.value, we don't need password here.
    setPassword(e.target.value);

    if (password.length < 5) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
    // Since setPassword is asynchronous, using password.length immediately after may not reflect the latest value
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleEmailChange}
          defaultValue={email}
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassChange}
          //on every change, the function will run
          defaultValue={password}
          //when we want to control the field and set the value, we need to use defaultValue, else, it will be a read only field
          required
          //   must be needed, thus use required
        />
        <br />
        <input type="submit" value="Submit Now" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
