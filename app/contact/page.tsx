"use client";

import { useEffect } from "react";
import { useAppContext } from "../context";

const Contact = () => {
  const { page, setPage } = useAppContext();

  useEffect(() => {
    setPage("contact");
    return () => {
      setPage("default");
    };
  }, [setPage]);

  return (
    <section
      className={
        page === "contact" ? "contact-section active" : "contact-section"
      }
    >
      <form className="contact-form">
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="email" id="email" placeholder="email" />
        <textarea name="msg" id="msg" placeholder="message"></textarea>
        <button type="submit" className="form-submit-btn">
          contact
        </button>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25931.28330311064!2d139.67201653842514!3d35.66689516149234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb2eb3108d1%3A0xf11cd9b2395b6677!2sShibuya%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1753616907276!5m2!1sen!2sjp"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
