import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("YEET");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  // e is a parameter that comes by default while running this event. synthetic base event. there is a property named "target", which is actually the overall form. then target's name is gotten from form. And then we extract the value from it.

  // preventDefault prevents reloading the page on submission including on default behaviour

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* overall form submission. not a button onclick, thus.*/}
        <input type="text" name="name" placeholder="Your Name"></input>
        <br />
        <input type="email" name="email" placeholder="Your Email"></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default SimpleForm;
