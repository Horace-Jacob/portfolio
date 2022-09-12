import React from "react";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const openLinkInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const form = React.useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
            }
            alt="email"
          />
          <div
            onClick={() =>
              openLinkInNewTab("https://www.facebook.com/lwinoo.naing.940")
            }
            className="p-text"
          >
            Facebook
          </div>
        </div>
        <div className="app__footer-card">
          <img
            src={
              "https://www.kindpng.com/picc/m/363-3632986_logo-linkedin-png-rond-transparent-png.png"
            }
            alt="phone"
          />
          <div
            onClick={() =>
              openLinkInNewTab(
                "https://www.linkedin.com/in/horace-jacob-b99a08233/"
              )
            }
            className="p-text"
          >
            LinkedIn
          </div>
        </div>
        <div className="app__footer-card">
          <img
            src={
              "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            }
            alt="phone"
          />
          <div
            onClick={() => openLinkInNewTab("https://github.com/Horace-Jacob")}
            className="p-text"
          >
            GitHub
          </div>
        </div>
      </div>

      <form
        className="app__footer-form app__flex"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="to_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="from_name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="About"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <input
          type={"submit"}
          className="button"
          style={{ backgroundColor: "var(--teal-color)" }}
          value="Send"
        />
      </form>
    </>
  );
};

export default AppContainer(
  MotionContainer(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
