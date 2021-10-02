import { specialChars } from "@testing-library/user-event";
import React from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  function formNameHandler(e) {
    setFormData({ ...formData, name: e.target.value });
  }
  function formEmailHandler(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function formTextHandler(e) {
    setFormData({ ...formData, text: e.target.value });
  }

  function submitFormHandler(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App">
      <form className="form-container" onSubmit={submitFormHandler}>
        <div className="input-container">
          <input
            onChange={formNameHandler}
            value={formData.name}
            placeholder="Name"
            type=""
            className="form-input"
          ></input>
          <input
            onChange={formEmailHandler}
            value={formData.email}
            type="email"
            className="form-input"
            placeholder="Email"
          ></input>
        </div>
        <textarea
          onChange={formTextHandler}
          value={formData.text}
          type="textarea"
          className="input-text"
          placeholder="Message.."
        ></textarea>
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
