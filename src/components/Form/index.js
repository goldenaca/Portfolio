import React from "react";
import "./form.css";
import emailjs from "emailjs-com";

function Form() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_j1wtlrp",
      "template_9j553o3",
      form.current,
      "user_s134Jyqg1siiTJaLZZUQ7"
    );
    form.current.reset();
  };

  return (
    <div className="App">
      <form ref={form} className="form-container" onSubmit={sendEmail}>
        <div className="input-container">
          <input
            placeholder="Yout name.."
            type="text"
            className="form-input"
            name="name"
          ></input>
          <input
            type="email"
            className="form-input"
            placeholder="Your email.."
            name="email"
          ></input>
        </div>
        <textarea
          type="textarea"
          className="input-text"
          placeholder="Message.."
          name="message"
        ></textarea>
        <button className="submit-button" type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
