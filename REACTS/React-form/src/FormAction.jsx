import React from "react";

const handleFormAction = (formData) => {
  console.log(formData.get("name"));
  console.log(formData.get("email"));
};

const FormAction = () => {
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default FormAction;
