import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ft8vuvj',
        'template_u4bg3je',
        form.current,
        'p5ztkjkd2Uy1kHOxJ'
      )
      .then(
        () => {
          setDone(true);
          document.getElementById("user-form").reset();
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div>
        <div className="info contact-info">
          <span style={{color: darkMode?'white': ''}}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur contact-blur1"></div>
        </div>
      </div>

      {/* form */}
      <div className="contact-right">
        <form id="user-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user"  placeholder="Name" required/>
          <input type="email" name="email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message" required/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for contacting me! I will get back to you the soonest."}</span>
          <div className="blur contact-blur2"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
