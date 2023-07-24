import Headline from "../shared/Headline";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj6b0eb",
        "template_70ohz5h",
        form.current,
        "32KmLZ8qnrEo8SCMS"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 contact"
      id="contact"
    >
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by sending me email and I will get back to you as soon as possible!"
        }
      />

      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
            required
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
            required
          />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Leave Your Message"
            className="p-5 mb-8"
            required
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
