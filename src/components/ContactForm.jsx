import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkswtud", //service_id
        "template_gss6xsd", //template_id
        form.current,
        "C6ozYClltLNzsHu7n" //public key
      )
      .then(
        () => {
          alert("Message sent! 💌");
        },
        (error) => {
          alert("Something went wrong 😭");
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 max-w-md mx-auto px-5 lg:px-10 pb-10"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
        className="w-full p-2  focus:outline-none bg-white "
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className="w-full p-2 focus:outline-none bg-white"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="h-35 w-full p-2 focus:outline-none bg-white"
      />
      <div className="w-full text-center">
        <button
          type="submit"
          className="border border-black text-black  px-3 py-2 rounded-full hover:opacity-50 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
