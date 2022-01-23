import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const OnSubmit = () => {
    emailjs
      .sendForm(
        "service_82yeark",
        "template_zwa3gbb",
        form.current,
        "user_cVn3jJltLvA3fLuCB6wF1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();

    toast.success(
      "Thank you for contacting me, I will get back to you in 24hours",
      {
        position: "bottom-right",
        autoClose: 5000,
      }
    );
  };
  return (
    <main className="contact-container" id="contact">
      <section className="inner-container">
        <section className="socials">
          <div className="title">
            <h1>Lets work together!</h1>
            <span></span>
          </div>

          <div className="icons">
            <section>
              <a
                href="https://github.com/ctadev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
                <p>Github</p>
              </a>
            </section>
            <section>
              <a
                href="https://www.linkedin.com/in/cong-ta-8040a018b/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
                <p>LinkedIn</p>
              </a>
            </section>
            <section>
              <a href="mailto:ctakammy@gmail.com">
                <i className="far fa-envelope"></i>
                <p>ctakammy@gmail.com</p>
              </a>
            </section>
          </div>
        </section>

        <section className="email">
          <form ref={form} onSubmit={handleSubmit(OnSubmit)}>
            <h1>Say Hi</h1>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 15,
              })}
            />
            {errors.name && (
              <span style={{ color: "coral" }}>
                Please enter your name and must be between 3-15 characters.
              </span>
            )}
            <input
              type="text"
              placeholder="Email address"
              name="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "coral" }}>
                Please enter a valid email address
              </span>
            )}
            <textarea
              placeholder="Message"
              name="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span style={{ color: "coral" }}>Please enter your message</span>
            )}
            <button type="submit">Send</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
