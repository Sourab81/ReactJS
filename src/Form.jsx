import React, { useState } from "react";

function Form() {
  let [input, SetInput] = useState({
    name: "",
    email: "",
    passWord: "",
  });

  function fun1(e) {
    let { name, value } = e.target;
    SetInput({ ...input, [name]: value });
    console.log(e.target);
  }

  function done(e) {
    e.preventDefault();
    console.log(input, "done!");
  }

  
  return (
    <>
      <fieldset>
        <legend>Form</legend>
        <form onSubmit={done}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={fun1}
            placeholder="Enter Your Name"
          />
          <br></br>
          <br></br>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={fun1}
            placeholder="Enter Your Email"
          />
          <br></br>
          <br></br>
          <input
            type="passWord"
            name="passWord"
            value={input.passWord}
            onChange={fun1}
            placeholder="Enter Your Password"
          />
          <br></br>
          <br></br>
          <button type="submit"> Save</button>
        </form>
      </fieldset>
    </>
  );
}

export default Form;
