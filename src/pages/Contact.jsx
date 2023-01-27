import React, { useRef } from "react";
import Navbar from "../components/navBar/Navbar";
import { Form } from "react-bootstrap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import Footer from "../components/footer/Footer";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yunwyk",
        "template_qbnjyyl",
        form.current,
        "VaPzl5tesZti2CDAZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Contact">
      <Navbar />
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "twin", duration: "1" }}
        className="contact-wrapper"
      >
        <div className="info">
          <h1>Contacts</h1>
          <div className="phone">
            <h2 className="titles">
              {" "}
              <LocalPhoneIcon /> Phone Numbers
            </h2>
            <sub>
              <WhatsAppIcon className="wpIcon" /> You can message on Whatsapp
              direcktly by clicking on numbers
            </sub>
            <a href="https://wa.me/905340367033" target="_blank">
              <h2>+90 534 036 70 33</h2>
              <p>Sultan Gokçe - CEO and Founder of LemonAdler</p>
            </a>
            <a href="https://wa.me/905550644012" target="_blank">
              <h2>+90 555 064 40 12</h2>
              <p>Ali Rabiei - Partner and Senior Designer</p>
            </a>
          </div>
          <div className="emails">
            <h2 className="titles">
              {" "}
              <EmailIcon /> Email Addresses
            </h2>
            <h2>info@lemonadler-9.com</h2>
            <h2>business@lemonadler-9.com</h2>
          </div>
          <div className="adress">
            <h2 className="titles">
              {" "}
              <LocationOnIcon /> Address
            </h2>
            <h5>
              Plaza İş ve Yaşam Merkezi, Mustafa Kemal Mh. <br />
              Tepe Prime No: 266 Daire:18, Çankaya, Ankara, Turkey
            </h5>
          </div>
        </div>
        <div className="contact-form">
          <h4 className="titles">We'll call you back.</h4>
          <Form ref={form} className="form" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="text"
                autoComplete="off"
                placeholder="Enter Your Full Name"
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="number"
                placeholder="Your Phone Number"
                name="user_number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="email"
                autoComplete="off"
                placeholder="Enter email"
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input"
                type="text"
                autoComplete="off"
                placeholder="Subject"
                name="user_subject"
              />
            </Form.Group>
            <textarea
              className="input"
              name="user_message"
              id="message"
              placeholder="How can we help you?"
              cols="30"
              rows="5"
            ></textarea>
            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
