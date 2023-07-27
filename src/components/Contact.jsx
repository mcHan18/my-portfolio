import Headline from "../shared/Headline";
import { useRef } from "react";
// import { useState,  } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "mapbox-gl/dist/mapbox-gl.css";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();
  const position = [42.4258956, -71.0709695];
  const accessToken =
    "pk.eyJ1IjoibWNsb2xvZSIsImEiOiJjbGtocXVpZjYwN3kzM3Bta3gxbWJrNGI2In0.4fdLHukESssR8gKHe7iUFg";

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
      variants={fadeIn("right", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 contact"
      id="contact"
    >
      <Headline
        title={"CONTACT"}
        subtitle={
          <div style={{ whiteSpace: "pre-line" }}>
            Feel free to Contact me by{" "}
            <a href="#formContainer">
              <strong style={{ color: "#7843e9", fontWeight: "bold" }}>
                sending me an email
              </strong>
            </a>
            , and I will get back to you as soon as possible!
            <br />
            {"\n"}My address: 100-150 Exchange Street, Malden, MA, 02148
          </div>
        }
      />

      <div
        className="flex-container md:w-100% mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="map-container w-1/2 h-400px p-4 rounded"
          style={{
            width: "90%",
            height: "350px",
            padding: "2",
            borderRadius: "20px",
            zIndex: "0",
          }}
          id="map"
        >
          <MapContainer center={position} zoom={11} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
              id="mapbox/streets-v11"
              accessToken={accessToken}
            />
            <Marker position={position}>
              <Popup>Mengchen here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-container w-full p-2 rounded"
          id="formContainer"
          style={{ flex: 1 }}
        >
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
            rows="8"
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
