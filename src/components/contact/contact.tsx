import React from "react";
import "./contact.less";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1> Get In Touch</h1>
        <p>
          Feel free to contact me, my inbox is always open. Whether you have a
          question or just want to say hi, I'll try my best to get back to your
          mail :D
        </p>
        <a
          className={"contact-button"}
          href={"mailto:hx2313@barnard.edu?Subject=Hello"}
          target="_blank"
          rel="noopener"
        >
          <h3>Say Hello!</h3>
        </a>
      </div>
    </div>
  );
};
