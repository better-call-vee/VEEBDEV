import React from "react";
import { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef(""); // After mount: current = <input>
  const passwordRef = useRef("");

  /*
  useRef creates a mutable object ({ current: initialValue }) that persists across component re-renders.
  
  Two Main Uses:
  Accessing DOM elements directly.
  Storing mutable values that don’t affect rendering (e.g., timers, previous values).

  */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="" />
        <br />
        <input ref={passwordRef} type="password" name="" />
        <br />
        <input type="submit" value="Submit Bitch" />
      </form>
    </div>
  );
};

export default UncontrolledField;
